"use client";

import React, { useState } from "react";
import { toast } from 'react-toastify'

const Contact = () => {
  const [guest, setGuest] = useState({
    email: "",
    name: "",
    message: "",
  });
const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(guest),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent!");
        setGuest({ name: "", email: "", message: "" });
        setSending(false)
      } else {
        toast.error("Failed to send: " + result.message);
      }
    } catch (error) {
      toast.error("Something went wrong: " + error.message);
    }
  };

  return (
    <div>
      <h1 className=" font-bold title w-fit mx-auto text-desc my-[10px] py-[5px] text-[20px] uppercase border-solid border-b-[1px] border-b-desc">
        Contact Me
      </h1>
      <div
        style={{ margin: "10px 0" }}
        className="sm:flex sm:justify-center sm:items-center p-[20px]"
      >
        <form className="flex flex-col gap-[10px] width-full" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={guest.name}
            onChange={(e) => setGuest({ ...guest, name: e.target.value })}
            className="bg-[#d1dfe8] sm:w-[400px] h-[30px] placeholder:text-[13px] text-[13px] p-[5px] outline-0"
          />
          <input
            type="text"
            placeholder="Email"
            value={guest.email}
            onChange={(e) => setGuest({ ...guest, email: e.target.value })}
            className="bg-[#d1dfe8] sm:w-[400px] h-[30px] placeholder:text-[13px] text-[13px] p-[5px] outline-0"
          />
          <textarea
            value={guest.message}
            onChange={(e) => setGuest({ ...guest, message: e.target.value })}
            placeholder="Message"
            className="bg-[#d1dfe8] sm:w-[400px] h-[100px] placeholder:text-[13px] text-[13px] p-[5px] outline-0"
          ></textarea>
          <button className="bg-[#0c7986] rounded-[5px] mx-auto p-[5px] text-[12px] text-btn outline-0">
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div
        style={{ margin: "10px 0" }}
        className="border-t-[1px] border-solid border-t-desc py-[10px] text-desc text-center text-[12px]"
      >
        <p>&copy; 2025 BeejayCodes. All rights reserved</p>
      </div>
    </div>
  );
};

export default Contact;
