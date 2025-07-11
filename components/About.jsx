"use client";

import React, { useEffect } from "react";
import { PortableText } from "next-sanity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const About = ({ about }) => {
   

 useEffect(() => {
     const animation = gsap.from(".about", {
       scrollTrigger: {
         trigger: ".about",
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
    <div className="text-[white] sm:px-[50px] px-[30px] my-[30px]">
      <h1 className="title text-shadow-[2px_2px_2px_#0c7986] w-fit mx-auto font-bold text-desc my-[10px] py-[5px] text-[20px] uppercase border-solid border-b-[1px] border-b-desc">
        {about[0].title}
      </h1>
      <div className="about text-text text-center sm:text-[15px] text-[13px] py-[10px] leading-[25px]">
        <PortableText value={about[0].about} />
      </div>
    </div>
  );
};

export default About;
