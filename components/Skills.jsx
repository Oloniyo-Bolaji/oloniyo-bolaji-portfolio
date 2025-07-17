"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import * as simpleIcons from "simple-icons";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Skills = ({ techStacks }) => {
  const getSimpleIcon = (slug) => {
    const iconKey = "si" + slug.charAt(0).toUpperCase() + slug.slice(1);
    return simpleIcons[iconKey];
  };
  const staggerRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(staggerRef.current.children);

    gsap.from(boxes, {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: staggerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  useEffect(() => {
    const animation = gsap.from(".skills", {
      scrollTrigger: {
        trigger: ".skills",
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
    <div className="skills text-[white] my-[30px] px-[20px]">
      <h1 className="title text-shadow-[2px_2px_2px_#0c7986] font-bold w-fit mx-auto text-desc my-[10px] py-[5px] text-[20px] uppercase border-solid border-b-[1px] border-b-desc">
        Tools
      </h1>
      <div
        ref={staggerRef}
        className="grid grid-cols-3 sm:grid-cols-6 gap-[20px] text-[white] w-full py-[10px]"
      >
        {techStacks.map((techStack) => {
          const icon = getSimpleIcon(techStack.slug.current);

          return (
            <div
              key={techStack._id}
              className="flex items-center flex-col justify-center gap-[10px] bg-[#d1dfe850] p-[10px] rounded-[5px]"
            >
              {icon && (
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  width={40}
                  height={40}
                  fill={`#${icon.hex}`}
                  xmlns="http://www.w3.org/2000/svg"
                  title={icon.title}
                >
                  <path d={icon.path} />
                </svg>
              )}
              <span className="text-[12px] text-desc">{techStack.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
