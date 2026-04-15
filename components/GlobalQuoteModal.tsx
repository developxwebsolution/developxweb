"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RefreshCw } from "lucide-react";
import { createPortal } from "react-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  country: string;
  message: string;
}

export default function GlobalQuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [popup, setPopup] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    country: "in",
    message: "",
  });
  const OPEN_AFTER_HOURS = 12;
const TIME_LIMIT = OPEN_AFTER_HOURS * 60 * 60 * 1000;


  // --- Auto-open modal once per user ---
  // useEffect(() => {
  //   const key = "hasSeenForm";

  //   const markSeen = () => {
  //     try {
  //       localStorage.setItem(key, Date.now().toString());
  //     } catch {}
  //     try {
  //       document.cookie = `${key}=1; max-age=${60 * 60 * 24 * 365}; path=/`;
  //     } catch {}
  //   };

  //   try {
  //     if (localStorage.getItem(key)) return;
  //     const cookieFound = document.cookie
  //       .split(";")
  //       .some((c) => c.trim().startsWith(`${key}=`));
  //     if (cookieFound) return;

  //     setIsOpen(true);
  //     markSeen();
  //   } catch {
  //     if (!sessionStorage.getItem("_modalShown")) {
  //       try {
  //         sessionStorage.setItem("_modalShown", "1");
  //         setIsOpen(true);
  //       } catch {}
  //     }
  //   }
  // }, []);


  useEffect(() => {
  const key = "hasSeenForm";
  const OPEN_DELAY = 5000; // 5 seconds delay before opening
  const TIME_LIMIT = 12 * 60 * 60 * 1000; // ⏱️ 12 hours
// const TIME_LIMIT = 10 * 1000; // 10 seconds
  const markSeen = () => {
    try {
      localStorage.setItem(key, Date.now().toString());
    } catch {}
    try {
      document.cookie = `${key}=${Date.now()}; max-age=${60 * 60 * 12}; path=/`;
    } catch {}
  };

  try {
    const lastSeen = localStorage.getItem(key);
    if (lastSeen && Date.now() - parseInt(lastSeen, 10) < TIME_LIMIT) return;

    const cookieValue = document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${key}=`))
      ?.split("=")[1];

    if (cookieValue && Date.now() - parseInt(cookieValue, 10) < TIME_LIMIT) return;

    setTimeout(() => {
      setIsOpen(true);
      markSeen();
    }, OPEN_DELAY);
  } catch {
    if (!sessionStorage.getItem("_modalShown")) {
      try {
        sessionStorage.setItem("_modalShown", "1");
        setTimeout(() => setIsOpen(true), OPEN_DELAY);
      } catch {}
    }
  }
}, []);


  // --- Captcha generator ---
  const generateCaptcha = useCallback(() => {
    const a = Math.floor(Math.random() * 6) + 4;
    const b = Math.floor(Math.random() * 6) + 4;
    setNum1(a);
    setNum2(b);
  }, []);

  useEffect(() => {
    setMounted(true);
    generateCaptcha();
  }, [generateCaptcha]);

  // --- Validators ---
  const isValidName = (name: string) => {
    const pattern = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/;
    return pattern.test(name.trim());
  };

  const isValidEmail = (email: string) => {
    const basicPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!basicPattern.test(email)) return false;
    const domain = email.split("@")[1].toLowerCase();
    const tld = domain.split(".").pop();
    const validTlds = [
      "com","net","org","edu","gov","mil","info","biz","in","us","uk","ca","au",
      "io","ai","co","me","app","tech","store","xyz","online","pro","dev",
    ];
    return tld ? /^[a-z]{2,10}$/.test(tld) && validTlds.includes(tld) : false;
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    else if (!isValidName(formData.name))
      newErrors.name = "Please enter a valid name (letters only, 2–50 characters).";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!isValidEmail(formData.email))
      newErrors.email = "Please enter a valid email address (e.g. name@example.com).";

    if (!formData.mobile) newErrors.mobile = "Please enter your mobile number.";
    else {
      try {
        const phoneNumber = parsePhoneNumberFromString(formData.mobile);
        if (!phoneNumber || !phoneNumber.isValid())
          newErrors.mobile = `Invalid or incomplete phone number for ${formData.country.toUpperCase()}.`;
      } catch {
        newErrors.mobile = `Please enter a valid phone number for ${formData.country.toUpperCase()}.`;
      }
    }

    if (!formData.message.trim()) newErrors.message = "Please write your message.";

    if (parseInt(answer || "0", 10) !== num1 + num2)
      newErrors.captcha = "Captcha answer is incorrect.";

    return newErrors;
  };

  // --- Handlers ---
  const capitalizeWords = (text: string) =>
    text.replace(/\b\w/g, (char) => char.toUpperCase());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "name" ? capitalizeWords(value) : value,
    });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePhoneChange = (value: string, data?: { countryCode?: string }) => {
    const newMobile = `+${value}`;
    const newCountry = data?.countryCode || "in";

    setFormData({ ...formData, mobile: newMobile, country: newCountry });

    try {
      const phoneNumber = parsePhoneNumberFromString(newMobile);
      if (!phoneNumber || !phoneNumber.isValid()) {
        setErrors((prev) => ({
          ...prev,
          mobile: `Invalid or incomplete phone number for ${newCountry.toUpperCase()}.`,
        }));
      } else setErrors((prev) => ({ ...prev, mobile: "" }));
    } catch {
      setErrors((prev) => ({
        ...prev,
        mobile: `Invalid phone format for ${newCountry.toUpperCase()}.`,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // const res = await fetch("/api/sendForm", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    formType: "sendform", // ✅ REQUIRED for backend routing
    ...formData,
  }),
});

      const data = await res.json();

      if (data.success) {
        setPopup({ type: "success", msg: "Your message was sent successfully!" });
        setFormData({ name: "", email: "", mobile: "", country: "in", message: "" });
        setAnswer("");
        generateCaptcha();
      } else setPopup({ type: "error", msg: " Something went wrong. Please try again later." });
    } catch {
      setPopup({ type: "error", msg: " Network error. Please check your connection." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Render ---
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[99999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative rounded-2xl shadow-2xl w-[95%] max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal content (image + form) */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-0 rounded-tl-2xl rounded-tr-2xl overflow-hidden">
              {/* <div className="hidden md:flex justify-start bg-gradient-to-br from-[#E8F2FB] to-white ">
                <div className="get-in-touch-img relative w-full h-full">
                  <Image
                    src="/images/home_img/global-contact-img.webp"
                    alt="Contact Us"
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </div> */}

              <div className="bg-white  p-4 sm:p-6">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-black  hover:text-gray-500 transition"
                    aria-label="Close quote modal"
                  >
                    <X size={22} />
                  </button>
                </div>

                <h3 className="text-2xl font-semibold text-[#4A89C9] mb-4 text-center md:text-left">
                  Get a Free Quote
                </h3>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3" autoComplete="off">
                    {/* Name */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`p-2 w-full border rounded-lg focus:outline-none bg-white text-black placeholder-gray-500 ${
                          errors.name ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                      {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className={`p-2 w-full border rounded-lg focus:outline-none bg-white text-black placeholder-gray-500 ${
                          errors.email ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                      {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>

                    {/* Mobile */}
                    <div className="primary-form">
                      <PhoneInput
                       
                        country={formData.country}
                        value={formData.mobile.replace("+", "")}
                        onChange={handlePhoneChange}
                        enableSearch
                          

                        inputProps={{ name: "mobile", required: true }}
                        containerClass="w-full"
                        inputClass={`w-full !py-3 !text-base !rounded-lg !border !bg-white !text-black placeholder-gray-500 ${
                          errors.mobile ? "!border-red-500" : "!border-gray-200"
                        }`}
                        buttonClass="!bg-white"
                        searchPlaceholder="Search country..."
                      />
                      {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile}</span>}
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={2}
                        value={formData.message}
                        onChange={handleChange}
                        className={`p-2 w-full border rounded-lg focus:outline-none bg-white text-black placeholder-gray-500 ${
                          errors.message ? "border-red-500" : "border-gray-200"
                        }`}
                      />
                      {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                    </div>

                    {/* Captcha */}
                    <motion.div className="flex items-center gap-2 w-full" whileFocus={{ scale: 1.02 }}>
                      <label className="flex flex-wrap text-sm font-medium text-gray-800">
                        <span>Captcha : </span> &nbsp; {num1} + {num2} =
                      </label>
                      <div className="flex items-center gap-3 justify-between">
                        <input
                          type="number"
                          placeholder="Enter answer"
                          value={answer}
                          onChange={(e) => {
                            setAnswer(e.target.value);
                            setErrors((prev) => ({ ...prev, captcha: "" }));
                          }}
                          className={`p-2 w-full border rounded-lg focus:outline-none bg-white text-black placeholder-gray-500 ${
                            errors.captcha ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-indigo-300"
                          }`}
                        />
                        <motion.button
                          type="button"
                          whileHover={{ rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => generateCaptcha()}
                          className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          <RefreshCw className="w-5 h-5 text-gray-700" />
                        </motion.button>
                      </div>
                      {errors.captcha && <span className="text-red-500 text-sm">{errors.captcha}</span>}
                    </motion.div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`mt-2 flex items-center justify-center gap-2 bg-[#5E9ED5] py-3 rounded-lg font-medium transition-all duration-300 shadow-md ${
                        isSubmitting ? "opacity-80 cursor-not-allowed" : "hover:bg-[#4a8bcc]"
                      }`}
                      whileTap={{ scale: isSubmitting ? 1 : 0.96 }}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="sending"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-2"
                          >
                            <motion.div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </motion.div>
                        ) : (
                          <motion.span
                            key="send"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            Send Message
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </form>

                  {/* Popup */}
                  {mounted &&
                    createPortal(
                      <AnimatePresence>
                        {popup && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 flex items-center justify-center bg-black/50 z-[99999]"
                          >
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className={`bg-white p-6 rounded-lg shadow-lg text-center ${
                                popup.type === "error" ? "text-red-600" : "text-green-600"
                              }`}
                            >
                              <p>{popup.msg}</p>
                              <button
                                onClick={() => setPopup(null)}
                                className="mt-4 px-4 py-1 bg-black text-white rounded-md"
                              >
                                Close
                              </button>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>,
                      document.body
                    )}
                </motion.div>
              </div>
            </div>


             {/* <div className="left-logos  flex  rounded-br-2xl rounded-bl-2xl  items-center justify-around pt-3 pb-3 bg-gray-200 border-b-[#5E9ED5] border-b-4  shadow-sm">
                              <span className="">
                                <svg
                                  className="w-[60.29px] h-[19.78px] "
                                  viewBox="0 0 113 39"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_179_33841)">
                                    <path
                                      d="M109.335 23.6155L112.466 25.7026C111.45 27.1991 109.019 29.7669 104.818 29.7669C99.6001 29.7669 95.7145 25.7301 95.7145 20.5948C95.7145 15.1302 99.6413 11.4229 104.378 11.4229C109.143 11.4229 111.477 15.2124 112.232 17.2582L112.644 18.3019L100.369 23.3821C101.303 25.2221 102.758 26.1557 104.818 26.1557C106.877 26.1557 108.305 25.1396 109.335 23.6155ZM99.7101 20.3067L107.907 16.9014C107.454 15.7618 106.109 14.9518 104.502 14.9518C102.456 14.9518 99.614 16.7643 99.7101 20.3067Z"
                                      fill="#FF302F"
                                    />
                                    <path
                                      d="M89.7968 2.07239H93.751V28.9294H89.7968V2.07239Z"
                                      fill="#20B15A"
                                    />
                                    <path
                                      d="M83.5632 12.1368H87.3803V28.4486C87.3803 35.2177 83.3847 38.005 78.6613 38.005C74.2127 38.005 71.5354 35.0118 70.533 32.5816L74.0342 31.126C74.6657 32.6226 76.1898 34.394 78.6613 34.394C81.6957 34.394 83.5632 32.5128 83.5632 28.9979V27.6799H83.4259C82.5196 28.7782 80.7896 29.7667 78.5927 29.7667C74.0067 29.7667 69.805 25.7711 69.805 20.6223C69.805 15.4458 74.0067 11.4092 78.5927 11.4092C80.7759 11.4092 82.5196 12.3841 83.4259 13.455H83.5632V12.1368ZM83.8376 20.6223C83.8376 17.3819 81.682 15.0202 78.9359 15.0202C76.1623 15.0202 73.8281 17.3819 73.8281 20.6223C73.8281 23.8214 76.1623 26.1418 78.9359 26.1418C81.6822 26.1557 83.8378 23.8214 83.8378 20.6223"
                                      fill="#3686F7"
                                    />
                                    <path
                                      d="M48.097 20.5535C48.097 25.8398 43.9779 29.7254 38.925 29.7254C33.8724 29.7254 29.7531 25.8262 29.7531 20.5535C29.7531 15.2399 33.8724 11.3679 38.925 11.3679C43.9779 11.3679 48.097 15.2399 48.097 20.5535ZM44.0877 20.5535C44.0877 17.2584 41.6985 14.9926 38.925 14.9926C36.1516 14.9926 33.7624 17.2584 33.7624 20.5535C33.7624 23.8213 36.1516 26.1145 38.925 26.1145C41.6987 26.1145 44.0877 23.8213 44.0877 20.5535Z"
                                      fill="#FF302F"
                                    />
                                    <path
                                      d="M68.1299 20.5948C68.1299 25.8811 64.0107 29.7667 58.958 29.7667C53.9051 29.7667 49.786 25.8809 49.786 20.5948C49.786 15.2811 53.9051 11.4229 58.958 11.4229C64.0107 11.4229 68.1299 15.2675 68.1299 20.5948ZM64.1068 20.5948C64.1068 17.2996 61.7177 15.0338 58.9441 15.0338C56.1704 15.0338 53.7814 17.2996 53.7814 20.5948C53.7814 23.8626 56.1707 26.1557 58.9441 26.1557C61.7314 26.1557 64.1068 23.8489 64.1068 20.5948Z"
                                      fill="#FFBA40"
                                    />
                                    <path
                                      d="M14.6771 25.7437C8.92394 25.7437 4.42052 21.1028 4.42052 15.3496C4.42052 9.59669 8.92394 4.95574 14.6771 4.95574C17.7802 4.95574 20.0456 6.17769 21.7207 7.74305L24.4807 4.98329C22.1466 2.74525 19.0297 1.04236 14.6771 1.04236C6.79588 1.04258 0.163956 7.46864 0.163956 15.3496C0.163956 23.2306 6.79588 29.6569 14.6771 29.6569C18.9336 29.6569 22.1466 28.2564 24.6592 25.6476C27.2405 23.0662 28.0368 19.4413 28.0368 16.503C28.0368 15.583 27.927 14.6357 27.8034 13.9355H14.6771V17.7525H24.0275C23.7529 20.1418 22.9978 21.7757 21.8856 22.8876C20.54 24.2471 18.4119 25.7437 14.6771 25.7437Z"
                                      fill="#3686F7"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_179_33841">
                                      <rect
                                        width="112.85"
                                        height="37.3"
                                        fill="white"
                                        transform="translate(0 0.985535)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
            
                              <span className="">
                                <Image
                                  src="/images/icons/trustpilpt.png"
                                  alt="trustpilpt"
                                  width={138.75}
                                  height={30}
                                  loading="lazy"
                                  className="w-[74.13px] h-[19.77px]  "
                                />
                              </span>
                              <span className="">
                                <Image
                                  src="/images/icons/clutch.png"
                                  alt="clutch"
                                  width={112.85}
                                  loading="lazy"
                                  height={37.14}
                                  className="w-[60.29px] h-[19.84px] "
                                />
                              </span>
                              <span className="">
                                <Image
                                  src="/images/icons/goodfirms.png"
                                  alt="goodfirms"
                                  width={162.8}
                                  height={36.9}
                                  loading="lazy"
                                  className="w-[86.98px] h-[19.72px] "
                                />
                              </span>
                            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
