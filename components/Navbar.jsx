"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import { client } from "@/src/sanity/client";
import { getResume } from "@/src/sanity/queries";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const options = { next: { revalidate: 30 } };

const Navbar = () => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      const data = await client.fetch(getResume, {}, options);
      setResume(data);
    };

    fetchResume();
  }, []);

  return (
    <nav
      style={{
        background: "var(--glass-bg)",
        boxShadow: "var(--glass-shadow)",
        backdropFilter: "var(--glass-blur)",
        WebkitBackdropFilter: "var(--glass-blur)",
      }}
      className="h-[70px] w-full flex justify-between items-center sm:px-[50px] px-[30px] z-[1000] fixed top-0 left-0"
    >
      <div>
        <Link
          href="/"
          className={`${greatVibes.className} sm:text-4xl text-3xl font-bold bg-gradient-to-r from-[#3B82F6] via-[#d1dfe8] to-[#616060] text-transparent bg-clip-text`}
        >
          Beejay
        </Link>
      </div>
      <div className="flex items-center gap-2.5">
        {/*<Link href="/blog" className="text-[13px] text-title">
          Blog
        </Link>*/}
        {resume?.fileUrl && (
          <a
            href={resume.fileUrl}
            download="Oloniyo_Bolaji.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E6EDF3] p-[5px] bg-[#3B82F6] rounded-[5px] text-[13px]"
          >
            Resume
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
