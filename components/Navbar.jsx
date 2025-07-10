"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { client } from "@/src/sanity/client";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const getResume = `*[_type == "resume"][0]{
  title,
  "fileUrl": file.asset->url
}`;

const options = { next: { revalidate: 30 } };

const Navbar = async () => {
  const [isDark, setIsDark] = useState(false);
  const resume = await client.fetch(getResume, {}, options);

  return (
    <nav className="h-[70px] w-full flex justify-between items-center sm:px-[50px] px-[30px] z-[2]">
      <div>
        <Link
          href="/"
          className={`${greatVibes.className} sm:text-[40px] text-[30px] font-bold bg-gradient-to-r from-[#0c7986] via-[#d1dfe8] to-[#616060] text-transparent bg-clip-text`}
        >
          Beejay
        </Link>
      </div>
      <div className="flex items-center gap-[10px]">
        <a
          href={resume.fileUrl}
          download="Oloniyo_Bolaji.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0c7986] p-[5px] border-solid border-[2px] border-[#0c7986] rounded-[5px] text-[13px]"
        >
          Resume
        </a>
        <button
          className="text-[yellow] text-[20px] bg-[#d1dfe830] p-[5px] rounded-[10px] border-solis border-[1px] border-desc"
          onClick={() => {
            setIsDark(!isDark);
            document.documentElement.classList.toggle("dark");
          }}
        >
          {isDark ? (
            <span className="text-[orange]">
              <IoSunny />
            </span>
          ) : (
            <span className="text-[#333333]">
              <FaMoon />
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
