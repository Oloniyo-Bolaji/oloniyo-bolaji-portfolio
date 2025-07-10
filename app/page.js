import About from "@/components/About";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/src/sanity/client";
import Contact from "@/components/Contact";

const getProjects = `*[_type == "projects"]{
    _id,
    "image": image.asset -> url,
    "slug": slug.current,
    title,
    link, 
    description,
    livelink,
    githublink,
    techStack[]->{
     title,      
     _id
},
   _publishedAt
    }`;
const getTechStack = `*[_type == "technology"]{
    _id,
    slug,
    title,
    }`;
const getHeader = `*[_type == "header"]{
    _id,
    "slug": slug.current,
    greeting,
    name,
    introduction, 
    instagram,
    linkedIn,
    github,
    "image": image.asset -> url,
    }`;
const getAbout = `*[_type == "about"]{
    _id,
    "slug": slug.current,
    title, 
    about,
    }`;
const getResume = `*[_type == "resume"][0]{
  title,
  "fileUrl": file.asset->url
}`;

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
