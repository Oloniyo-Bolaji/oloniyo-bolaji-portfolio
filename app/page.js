import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { client } from "@/src/sanity/client";
import Contact from "@/components/Contact";
import { getTechStack, getProjects, getExperience } from "@/src/sanity/queries";
import ParticlesBgComponent from "@/dynamic-components/ParticlesWrapper";
import ProjectsWrapper from "@/dynamic-components/ProjectsWrapper";
import Experience from "@/components/Experience";

const options = { next: { revalidate: 30 } };

const Home = async () => {
  const projects = await client.fetch(getProjects, {}, options);
  const techStacks = await client.fetch(getTechStack, {}, options);
  const experiences = await client.fetch(getExperience, {}, options);
  return (
    <div className="relative">
      <ParticlesBgComponent />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills techStacks={techStacks} />
        <Experience experiences={experiences} />
        <ProjectsWrapper projects={projects} />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
