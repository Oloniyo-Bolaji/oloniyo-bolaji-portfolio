"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { IoIosSend } from "react-icons/io";
import gsap from "gsap";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Contact = () => {
  const [guest, setGuest] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!guest.name || !guest.email || !guest.message) {
      toast.error("Please fill out all fields");
      return;
    }

    setSending(true);

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
      } else {
        toast.error("Failed to send: " + result.message);
      }
    } catch (error) {
      toast.error("Something went wrong: " + error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <h1 className="text-shadow-[2px_2px_2px_#0c7986] font-bold title w-fit mx-auto text-desc my-[10px] py-[5px] text-[20px] uppercase border-solid border-b-[1px] border-b-desc">
        Contact Me
      </h1>
      <div
        style={{ margin: "10px 0" }}
        className="sm:flex sm:justify-center sm:items-center p-[20px]"
      >
        <form
          className="flex flex-col gap-[10px] width-full"
          onSubmit={handleSubmit}
        >
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
          <button className="bg-[#0c7986] hover:bg-[white] hover:text-[#0c7986] border-solid border-[1px] border-[#0c7986] rounded-[5px] mx-auto w-[70px] flex items-center justify-center p-[5px] text-[20px] text-btn outline-0">
            {sending ? (
              <span
                className="size-5 animate-spin text-[#0c7986] hover:bg-[#0c7986] bg-[white]"
                viewBox="0 0 24 24"
              ></span>
            ) : (
              <span>
                <IoIosSend />
              </span>
            )}
          </button>
        </form>
      </div>
      <div
        style={{ margin: "10px 0" }}
        className="flex flex-col justify-center items-center border-t-[1px] border-solid border-t-desc py-[10px] text-desc text-center text-[12px]"
      >
        <button
          onClick={() => {
            gsap.to(window, { duration: 1, scrollTo: 0 });
          }}
          className="flex flex-col items-center"
        >
          <span className="text-[24px] animate-bounce">
            <MdKeyboardDoubleArrowUp />
          </span>
          <span>Back to Top</span>
        </button>
        <p>&copy; 2025 BeejayCodes. All rights reserved</p>
      </div>
    </div>
  );
};

export default Contact;
