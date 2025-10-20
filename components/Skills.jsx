"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Heading from "./Heading";
import { getSimpleIcon } from "@/lib/getIcons";

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ techStacks }) => {
  const sectionRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".skill-item",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse", // smoother toggle
          },
        }
      );
    },
    { scope: sectionRef } // cleaner than passing refs manually
  );

  return (
    <section ref={sectionRef} className="my-8 px-5">
      <Heading heading="Tools" />
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-5 w-full py-2.5">
        {techStacks.map((techStack) => {
          const icon = getSimpleIcon(techStack.slug.current);

          return (
            <div
              key={techStack._id}
              className="skill-item flex items-center gap-2.5 bg-[#3B82F670] p-2.5 rounded-sm"
            >
              {icon && (
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  fill={`#${icon.hex}`}
                  xmlns="http://www.w3.org/2000/svg"
                  title={icon.title}
                  className="sm:block hidden"
                >
                  <path d={icon.path} />
                </svg>
              )}
              <span className="text-sm text-[#E6EDF3]">{techStack.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
