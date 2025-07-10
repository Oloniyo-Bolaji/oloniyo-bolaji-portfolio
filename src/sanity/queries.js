export const getProjects = `*[_type == "projects"]{
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
export const getTechStack = `*[_type == "technology"]{
    _id,
    slug,
    title,
    }`;
export const getHeader = `*[_type == "header"]{
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
export const getAbout = `*[_type == "about"]{
    _id,
    "slug": slug.current,
    title, 
    about,
    }`;
export const getResume = `*[_type == "resume"][0]{
  title,
  "fileUrl": file.asset->url
}`;
