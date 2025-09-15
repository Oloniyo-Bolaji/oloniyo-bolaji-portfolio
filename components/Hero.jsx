"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

// Removed gsap imports since you’re not using them yet
// If you want animations later, we’ll integrate gsap.useGSAP

const Hero = () => {
  const socials = [
    {
      link: "https://www.instagram.com/that_beejay1?igsh=amJudHQ5YnozZmV0",
      icon: <FaInstagram size={20} />,
      label: "Instagram",
    },
    {
      link: "https://github.com/Oloniyo-Bolaji/",
      icon: <FaGithub size={20} />,
      label: "Github",
    },
    {
      link: "https://www.linkedin.com/in/bolaji-oloniyo-48998b334",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
    },
  ];

  return (
    <section className="relative mt-[70px] h-screen flex flex-col sm:flex-row items-center justify-between gap-8 px-5 sm:px-10 py-12">
      {/* Left Content */}
      <div className="max-w-[600px] flex flex-col gap-4">
        {/* Tagline */}
        <span className="w-fit text-xs px-3 py-1.5 rounded-lg bg-[#d1dfe830] text-[#3B82F6] border border-[#3B82F6]">
          Welcome to my portfolio
        </span>

        {/* Typewriter Heading */}
        <h1 className="sm:text-5xl text-4xl font-bold bg-gradient-to-r from-[#3B82F6] via-[#d1dfe8] to-[#616060] bg-clip-text text-transparent">
          <Typewriter
            words={["I am Bolaji", "A Frontend Developer"]}
            loop={true}
            cursor
            cursorBlinking
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        {/* Intro Text */}
        <p className="text-[#E6EDF3] sm:text-base text-sm leading-relaxed">
          I am a Frontend Web Developer. I build beautiful and responsive
          websites that your users will love.
        </p>

        {/* Socials */}
        <div className="flex gap-3 mt-2">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="icons"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="max-w-[500px] w-full flex justify-center">
        <div className="rounded-full w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] border-[5px] border-[#3B82F6] p-2.5">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/header.jpg"
              alt="Profile image"
              priority
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
