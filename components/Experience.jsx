"use client";

import React, { useState } from "react";
import Heading from "./Heading";
import { PortableText } from "next-sanity";
import { components } from "@/lib/components";

const Experience = ({ experiences }) => {
  const [activeTab, setActiveTab] = useState(experiences[0]);
  
  
  return (
    <section className="p-5 sm:px-8">
      <Heading heading="Work Experience" />

      <main className="flex my-2.5 sm:flex-row flex-col">
        <div className="sm:w-[20%] w-full flex sm:flex-col flex-row sm:border-l sm:borderl-2 sm:border-white">
          {experiences.map((experience, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(experience)}
                className={`text-left text-white px-4 py-2 transition-all duration-200 outline-none ${
                  activeTab?.title === experience.title
                    ? "bg-[#3B82F670]"
                    : ""
                }`}
              >
                {experience.title}
              </button>
            );
          })}
        </div>
        {/*contents*/}

        <div className="sm:w-[80%] w-full bg-[#3B82F670] p-5 shadow-lg">
          {activeTab ? (
            <div>
              <h3 className="text-2xl font-bold text-white">
                {activeTab.position}
              </h3>
              <p className="text-sm text-gray-900 mb-2">
                {activeTab.duration}
              </p>
              <PortableText value={activeTab.description} components={components}/>
            </div>
          ) : (
            <p className="text-gray-500 italic">
              Click a job title to view details.
            </p>
          )}
        </div>
      </main>
    </section>
  );
};

export default Experience;
