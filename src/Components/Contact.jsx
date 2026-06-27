import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gdniq62",
        "template_3yl34xo",
        form.current,
        "A_wJc0w690T5mTm2h"
      )
      .then(() => {
        alert("Message sent!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send!");
      });
  };

  return (
    <section id="contact" className="bg-[#05060a] text-white py-16 px-6">

      <div className="max-w-md mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Send a quick message
          </p>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-3">

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white text-sm focus:border-cyan-400 outline-none"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white text-sm focus:border-cyan-400 outline-none"
          />

          <textarea
            rows="3"
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white text-sm focus:border-cyan-400 outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-cyan-500 text-black text-sm font-medium hover:bg-cyan-400 transition"
          >
            Send Message
          </button>

        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6">

          <a
            href="https://github.com/Fatimaqaiser-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/fatima-chauhan-71ab64400/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 text-xl"
          >
            <FaLinkedin />
          </a>

          {/* EMAIL FIXED */}
         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=chohanfatima1231@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-red-400 text-xl"
>
  <FaEnvelope />
</a>

          <a
            href="https://wa.me/923245428564"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-400 text-xl"
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;