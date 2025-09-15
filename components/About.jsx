"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Heading from "./Heading";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-text",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse", // smoother when scrolling up/down
          },
        }
      );
    },
    { scope: aboutRef } // automatically scopes & cleans up
  );

  return (
    <section className="sm:px-12 px-8 my-8">
      <Heading heading="About me" />
      <div
        ref={aboutRef}
        className="text-[#E6EDF3] text-center sm:text-sm text-xs py-2.5 leading-[28px] max-w-[700px] mx-auto"
      >
        <p className="about-text">
          I am Oloniyo Bolaji, a self-taught and skilled React front-end
          developer specializing in modern JavaScript frameworks. With expertise
          in building visually stunning, responsive, user-friendly, and
          high-performing web applications using HTML, CSS, Tailwind CSS, React,
          and Next.js. I am a problem solver with high attention to detail and
          write clean, maintainable, and reusable code. I excel at bridging the
          gap between design and functionality, ensuring that every project I
          work on not only has a visually appealing interface but also delivers
          a seamless user experience. My commitment to continuous learning
          drives me to explore new technologies, frameworks, and best practices
          to stay ahead in modern web development.
        </p>
      </div>
    </section>
  );
};

export default About;
