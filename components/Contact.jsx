"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { IoIosSend } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { ImSpinner2 } from "react-icons/im";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Heading from "./Heading";

gsap.registerPlugin(ScrollToPlugin);

const Contact = () => {
  const [guest, setGuest] = useState({ email: "", name: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!guest.name || !guest.email || !guest.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("https://formspree.io/f/xwpnjoyo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(guest),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setGuest({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Try again later.");
      }
    } catch (error) {
      toast.error("Network error: " + error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <section>
      <Heading heading="Contact Me" />

      {/* Form */}
      <div className="flex justify-center items-center p-5">
        <form
          className="flex flex-col gap-2.5 w-full sm:w-[400px]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={guest.name}
            onChange={handleChange}
            className="inputs"
            aria-label="Your name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={guest.email}
            onChange={handleChange}
            className="inputs"
            aria-label="Your email"
          />
          <textarea
            name="message"
            value={guest.message}
            onChange={handleChange}
            placeholder="Message"
            className="inputs h-[100px]"
            aria-label="Your message"
          />
          <button
            disabled={sending}
            aria-label="Send message"
            className={`mx-auto w-[80px] flex items-center justify-center p-1 text-[20px] rounded-[5px] border transition-colors duration-300 
              ${sending ? "bg-gray-400 text-white cursor-not-allowed" : "bg-[#3B82F6] hover:bg-white hover:text-[#3B82F6] border-[#3B82F6] text-btn"}
            `}
          >
            {sending ? <ImSpinner2 className="animate-spin" /> : <IoIosSend />}
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="flex flex-col justify-center items-center border-t border-[#E6EDF3] py-2.5 text-[#E6EDF3] text-center text-[12px]">
        <button
          onClick={() => gsap.to(window, { duration: 1, scrollTo: 0 })}
          className="flex flex-col items-center"
        >
          <MdKeyboardDoubleArrowUp className="text-[24px] animate-bounce" />
          <span>Back to Top</span>
        </button>
        <p>
          &copy; {new Date().getFullYear()} BeejayCodes. All rights reserved
        </p>
      </div>
    </section>
  );
};

export default Contact;
