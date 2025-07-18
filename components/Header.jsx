"use client";

import React, { useEffect } from "react";
import { PortableText } from "next-sanity";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Header = ({ header }) => {
  useEffect(() => {
    SplitText.create(".intro", {
      type: "words,lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, {
          yPercent: 20,
          opacity: 0,
          stagger: 0.5,
          duration: 1,
          onComplete: () => self.revert(),
        });
      },
    });
    return () => {
      split.revert();
    };
  }, []);

  useEffect(() => {
    const animation = gsap.from(".icons", {
      scrollTrigger: {
        trigger: ".icons",
        start: "top 90%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="mt-[70px] pt-[70px] z-[1] sm:h-[500px] flex sm:items-center sm:justify-evenly gap-[10px] flex-col sm:flex-row text-[white] px-[20px] sm:px-[30px] py-[50px]">
      <div className="max-w-[500px] w-full flex flex-col gap-[10px]">
        <h1 className="w-fit text-[12px] p-[5px] rounded-[10px] bg-[#d1dfe830] text-[#0c7986] border-solid border-[1px] border-[#0c7986]">
          {header[0].greeting}
        </h1>
        <h1 className="sm:text-[40px] text-[30px] font-bold bg-gradient-to-r from-[#0c7986] via-[#d1dfe8] to-[#616060] bg-clip-text text-transparent">
          <Typewriter
            words={[header[0].name, "A Frontend Developer"]}
            cursor
            cursorBlinking
          />
        </h1>
        <div className="intro text-text sm:text-[15px] text-[13px]">
          <PortableText value={header[0].introduction} />
        </div>
        <div className="flex gap-[10px]">
          <a
            href={header[0].instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="icons p-[10px] rounded-full bg-[#0c7986] text-[20px]"
          >
            <FaInstagram />
          </a>

          <a
            href={header[0].github}
            target="_blank"
            rel="noopener noreferrer"
            className="icons p-[10px] rounded-full bg-[#0c7986] text-[20px]"
          >
            <FaGithub />
          </a>

          <a
            href={header[0].linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="icons p-[10px] rounded-full bg-[#0c7986] text-[20px]"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="max-w-[500px] w-full flex justify-center items-center">
        <div className="rounded-full w-[300px] h-[300px] p-[10px] border-solid border-[5px] border-[#0c7986]">
          <div className="relative pt-[10px] w-full h-full rounded-full overflow-hidden p-[10px]">
            <Image
              src={header[0].image}
              alt="Profile image"
              priority
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
