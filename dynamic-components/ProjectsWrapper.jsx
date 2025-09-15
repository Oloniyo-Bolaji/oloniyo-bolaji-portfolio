
"use client";

import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });


const ProjectsWrapper = ({projects}) => {
  return <Projects projects={projects}/>;
};

export default ProjectsWrapper;
