// import { Resend } from "resend";
// import "dotenv/config";

// const resend = new Resend(process.env.RESEND_API_KEY);
// type HeaderFormBody = {
//   formType: "headerform";
//   name: string;
//   email: string;
//   mobile: string;
//   company: string;
//   service: string;
//   location: string;
//   message: string;
// };

// type SendFormBody = {
//   formType: "sendform";
//   name: string;
//   email: string;
//   mobile: string;
//   message: string;
// };

// /* =========================================================
//    HEADER FORM (Detailed Form)
// ========================================================= */
// async function HEADER_FORM(body: HeaderFormBody) {
//   try {
//     const { name, email, mobile, company, service, location, message } = body;

//     if (!name || !email || !mobile || !company || !service || !location || !message) {
//       return new Response(
//         JSON.stringify({ success: false, error: "All fields are required." }),
//         { status: 400 }
//       );
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return new Response(
//         JSON.stringify({ success: false, error: "Invalid email format." }),
//         { status: 400 }
//       );
//     }

//     await resend.emails.send({
//       from: process.env.RESEND_FROM!,
//       to: process.env.RESEND_TO!,
//       replyTo: email,
//       subject: "📩 New Contact Form Submission",
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 15px;">
//           <h2>New Contact Form Submission</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${mobile}</p>
//           <p><strong>Company:</strong> ${company}</p>
//           <p><strong>Service:</strong> ${service}</p>
//           <p><strong>Location:</strong> ${location}</p>
//           <p><strong>Message:</strong> ${message}</p>
//         </div>
//       `,
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("RESEND HEADER FORM ERROR:", error);
//     return new Response(
//       JSON.stringify({ success: false, error: "Something went wrong while sending email." }),
//       { status: 500 }
//     );
//   }
// }

// async function SEND_FORM(body: SendFormBody) {
//   try {
//     const { name, email, mobile, message } = body;

//     if (!name || !email || !mobile || !message) {
//       return new Response(
//         JSON.stringify({ success: false, error: "All fields are required." }),
//         { status: 400 }
//       );
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return new Response(
//         JSON.stringify({ success: false, error: "Invalid email format." }),
//         { status: 400 }
//       );
//     }

//     await resend.emails.send({
//       from: process.env.RESEND_FROM!,
//       to: process.env.RESEND_TO!,
//       replyTo: email,
//       subject: "📩 New Message Received",
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 15px;">
//           <h2>New Message</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${mobile}</p>
//           <p><strong>Message:</strong></p>
//           <p>${message}</p>
//         </div>
//       `,
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("RESEND SEND FORM ERROR:", error);
//     return new Response(
//       JSON.stringify({ success: false, error: "Something went wrong while sending email." }),
//       { status: 500 }
//     );
//   }
// }





// /* =========================================================
//    SEND FORM (Simple Form)
// ========================================================= */


// /* =========================================================
//    MAIN POST HANDLER (LOGIC UNCHANGED)
// ========================================================= */
// export async function POST(req: Request) {
//   const body = await req.json();

//   // Type guard to narrow types
//   if (body.formType === "headerform") {
//     return HEADER_FORM(body as HeaderFormBody);
//   }

//   if (body.formType === "sendform") {
//     return SEND_FORM(body as SendFormBody);
//   }

//   return new Response(
//     JSON.stringify({ success: false, error: "Invalid form type" }),
//     { status: 400 }
//   );
// }





























import nodemailer from "nodemailer";
// import "dotenv/config";

/* =========================================================
   HEADER FORM (Detailed Form)
   Fields:
   - name
   - email
   - mobile
   - company
   - service
   - location
   - message
========================================================= */
async function HEADER_FORM(req: Request) {
  try {
    const { name, email, mobile, company, service, location, message } =
      await req.json();

    // Backend validation
    if (!name || !email || !mobile || !company || !service || !location || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required." }),
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email format." }),
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Send HTML formatted email
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "📩 New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 15px; background: #f9f9f9;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${mobile}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr/>
          <p style="font-size: 12px; color: #555; font-style: italic;">
            This message was sent via your website contact form.
          </p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Something went wrong while sending email.",
      }),
      { status: 500 }
    );
  }
}

/* =========================================================
   SEND FORM (Simple Form)
   Fields:
   - name
   - email
   - mobile
   - message
========================================================= */
async function SEND_FORM(req: Request) {
  try {
    const { name, email, mobile, message } = await req.json();

    // Basic validation (backend-level)
    if (!name || !email || !mobile || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required." }),
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email format." }),
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Send HTML formatted email
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "📩 New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 15px; background: #f9f9f9;">
          <h2 style="color: #333;">New Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${mobile}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line; background: #fff; padding: 10px; border-radius: 5px;">
            ${message}
          </p>
          <hr/>
          <p style="font-size: 12px; color: #555;">
            This message was sent via your website contact form.
          </p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Something went wrong while sending email.",
      }),
      { status: 500 }
    );
  }
}

/* =========================================================
   MAIN POST HANDLER
   Decides which form to execute
========================================================= */
export async function POST(req: Request) {
  const body = await req.json();

  if (body.formType === "headerform") {
    return HEADER_FORM(
      new Request(req.url, { method: "POST", body: JSON.stringify(body) })
    );
  }

  if (body.formType === "sendform") {
    return SEND_FORM(
      new Request(req.url, { method: "POST", body: JSON.stringify(body) })
    );
  }

  return new Response(
    JSON.stringify({ success: false, error: "Invalid form type" }),
    { status: 400 }
  );
}
