"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js"; // ✅ Phone lib
import { RefreshCw } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  country: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    country: "in", // 🇮🇳 Default
    message: "",
  });

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [popup, setPopup] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 6) + 4;
    const b = Math.floor(Math.random() * 6) + 4;
    setNum1(a);
    setNum2(b);
  };

  // ✅ Name validator
  const isValidName = (name: string) => {
    if (!name) return false;
    const pattern = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/;
    return pattern.test(name.trim());
  };

  // ✅ Email validator (TLD-aware)
  const isValidEmail = (email: string) => {
    if (!email) return false;
    const basicPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!basicPattern.test(email)) return false;

    const domain = email.split("@")[1].toLowerCase();
    const tld = domain.split(".").pop();
    const validTlds = [
      "com", "net", "org", "edu", "gov", "mil",
      "info", "biz", "in", "us", "uk", "ca", "au",
      "io", "ai", "co", "me", "app", "tech", "store",
      "xyz", "online", "pro", "dev"
    ];

    if (!tld || !/^[a-z]{2,10}$/.test(tld) || !validTlds.includes(tld)) {
      return false;
    }
    return true;
  };

  // ✅ Validation
  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (!isValidName(formData.name)) {
      newErrors.name = "Please enter a valid name (letters only, 2–50 characters).";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g. name@example.com).";
    }

    // Phone (libphonenumber)
    if (!formData.mobile) {
      newErrors.mobile = "Please enter your mobile number.";
    } else {
      try {
        const phoneNumber = parsePhoneNumberFromString(formData.mobile);
        if (!phoneNumber || !phoneNumber.isValid()) {
          newErrors.mobile = `Invalid or incomplete phone number for ${formData.country.toUpperCase()}.`;
        }
      } catch {
        newErrors.mobile = `Please enter a valid phone number for ${formData.country.toUpperCase()}.`;
      }
    }

    // Message
    if (!formData.message.trim()) newErrors.message = "Please write your message.";

    // Captcha
    if (parseInt(answer || "0", 10) !== num1 + num2)
      newErrors.captcha = "Captcha answer is incorrect.";

    return newErrors;
  };

  // ✅ Input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "name" ? capitalizeWords(value) : value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ✅ Auto-capitalize name
  const capitalizeWords = (text: string) =>
    text.replace(/\b\w/g, (char) => char.toUpperCase());

  // ✅ Phone change
  // ✅ Phone change (fixed)
const handlePhoneChange = (
  value: string,
  data: { countryCode?: string } | undefined
) => {
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
    } else {
      setErrors((prev) => ({ ...prev, mobile: "" }));
    }
  } catch {
    setErrors((prev) => ({
      ...prev,
      mobile: `Invalid phone format for ${newCountry.toUpperCase()}.`,
    }));
  }
};


  // ✅ Submit
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
      } else {
        setPopup({ type: "error", msg: "❌ Something went wrong. Please try again later." });
      }
    } catch {
      setPopup({ type: "error", msg: "⚠️ Network error. Please check your connection." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3" autoComplete="off">
        {/* 🧍 Name */}
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

        {/* 📧 Email */}
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

        {/* 📱 Mobile */}
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

        {/* 💬 Message */}
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

          {/* Captcha with Refresh */}
        <motion.div className="flex items-center  gap-2 w-full" whileFocus={{ scale: 1.02 }}>
          <label className="flex flex-wrap text-sm font-medium ">
            <span>Captcha: </span> {num1} + {num2} =
          </label>
          <div className="flex  items-center gap-3 justify-between  ">
            <input
              type="number"
              placeholder="Enter answer"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setErrors((prev) => ({ ...prev, captcha: "" }));
              }}
              className={`p-2 w-full border rounded-lg focus:outline-none bg-white text-black placeholder-gray-500 ${
                errors.captcha
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-200 focus:ring-indigo-300"
              }`}
            />
            <motion.button
              type="button"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => generateCaptcha()}
              className="p-2 bg-gray-200  rounded-lg hover:bg-gray-300 transition-colors"
            >
              <RefreshCw className="w-5 h-5 text-gray-700" />
            </motion.button>
          </div>
          {errors.captcha && <span className="text-red-500 text-sm">{errors.captcha}</span>}
        </motion.div>

        {/* 🚀 Submit */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`mt-2 view-all-btn flex items-center justify-center gap-2 bg-[#5E9ED5] py-3 rounded-lg font-medium transition-all duration-300 shadow-md
            ${isSubmitting ? "opacity-80 cursor-not-allowed" : "hover:bg-[#4a8bcc]"}`}
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
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  style={{ borderTopColor: "transparent" }}
                />
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

      {/* ✅ Popup */}
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
  );
}
