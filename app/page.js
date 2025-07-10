import About from "@/components/About";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/src/sanity/client";
import Contact from "@/components/Contact";
import {getResume, getTechStack, getAbout, getHeader, getProjects} from "@/src/sanity/queries"


const options = { next: { revalidate: 30 } };

const Home = async () => {
  const projects = await client.fetch(getProjects, {}, options);
  const techStacks = await client.fetch(getTechStack, {}, options);
  const header = await client.fetch(getHeader, {}, options);
  const about = await client.fetch(getAbout, {}, options);
  const resume = await client.fetch(getResume, {}, options);
  return (
    <div>
      <Header header={header} />
      <About about={about} />
      <Skills techStacks={techStacks} />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
};

export default Home;
