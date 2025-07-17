"use client";

import { urlFor } from "@/lib/imageBuilder";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";

const cardRefs = [];

const BlogCard = ({ article, index }) => {
  console.log(article);
  const cardRef = useRef();

  const getPlainText = (blocks) => {
    return blocks
      .map((block) => block.children?.map((child) => child.text).join("") || "")
      .join("\n");
  };

  const handleEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={(el) => {
        cardRef.current = el;
        cardRefs[index] = el;
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="p-[20px] rounded-md shadow-[0_4px_8px_rgba(128,128,128,0.2)] transition-transform"
    >
      {article.coverImage && (
        <div className="w-full h-[200px] relative">
          <Image
            src={urlFor(article.coverImage).url()}
            alt="image"
            fill
            sizes="auto"
            className="object-contain"
            priority
          />
        </div>
      )}
      <div className="mt-2">
        <div className="text-[10px] text-desc mb-1">
          <span>Bolaji</span> ·{" "}
          <span>
            {new Date(article.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
        <h2 className="text-[15px] font-semibold mb-1 text-text">
          {article.title}
        </h2>
        <p className="text-[12px] text-desc"></p>
      </div>
    </div>
  );
};

export default BlogCard;
