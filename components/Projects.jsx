"use client";

import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { urlFor } from "@/lib/imageBuilder";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ projects }) => {


  useEffect(() => {
    gsap.utils.toArray(".left").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    gsap.utils.toArray(".right").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div className="p-4 px-[20px]">
      <h1 className="title font-bold w-fit mx-auto text-desc my-[10px] py-[5px] text-[20px] uppercase border-solid border-b-[1px] border-b-desc">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[50px] px-[30px]">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className={`${index % 2 === 0 ? "left" : "right"} w-full flex flex-col gap-[5px] p-[10px] rounded-[20px] bg-[#d1dfe850]`}
          >
            {project.image && <Image
              src={urlFor(project.image).url()}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-auto rounded-[5px] object-contain"
            />}
            <h1 className="text-[15px] font-bold bg-gradient-to-r from-[#0c7986] via-[#d1dfe8] to-[#616060] bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-[13px] text-desc">{project.description}</p>

            <div className="flex gap-[10px]">
              <a
                href={project.livelink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-[5px] text-[12px] text-[#0c7986] border-solid border-[1px] border-[#0c7986]"
              >
                Live View
              </a>

              <a
                href={project.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-[5px] text-[12px] text-[#0c7986] border-solid border-[1px] border-[#0c7986]"
              >
                Github
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((stack, index) => (
                <span
                  key={index}
                  className="bg-[#d1dfe880] text-desc text-xs px-2 py-1 rounded-md"
                >
                  {stack.title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
