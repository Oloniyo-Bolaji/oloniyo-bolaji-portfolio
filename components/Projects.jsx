"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { urlFor } from "@/lib/imageBuilder";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Heading from "./Heading";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ projects }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const items = gsap.utils.toArray(containerRef.current.children);

    const ctx = gsap.context(() => {
      items.forEach((el, index) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          x: index % 2 === 0 ? -50 : 50, // alternate direction
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section className="p-4 sm:px-7">
      <Heading heading="Projects" />

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4"
      >
        {projects.map((project) => (
          <article
            key={project._id}
            className="flex flex-col gap-3 rounded-2xl border border-white/20 bg-[#0D111730] shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            {project.image && (
              <Image
                src={urlFor(project.image).url()}
                alt={project.title || "Project image"}
                width={500}
                height={300}
                loading="lazy"
                className="w-full h-auto rounded-t-2xl object-contain"
              />
            )}

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">
              {/* Title & Links */}
              <div className="flex items-center justify-between">
                <h2 className="text-base sm:text-lg font-extrabold bg-gradient-to-r from-[#3B82F6] via-[#d1dfe8] to-[#616060] bg-clip-text text-transparent">
                  {project.title}
                </h2>

                <div className="flex gap-2.5 text-white text-sm">
                  {project.livelink && (
                    <a
                      href={project.livelink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Live Project"
                      className="hover:text-[#3B82F6] transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.githublink && (
                    <a
                      href={project.githublink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on GitHub"
                      className="hover:text-[#3B82F6] transition-colors"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#E6EDF3] leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              {project.techStack?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((stack, index) => (
                    <span
                      key={index}
                      className="bg-[#3B82F670] text-[#E6EDF3] text-xs px-2 py-1 rounded-md"
                    >
                      {stack.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
