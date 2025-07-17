export const getProjects = `*[_type == "projects" && featured == true] | order(order asc) {
    _id,
    "image": image.asset -> url,
    "slug": slug.current,
    title,
    description,
    livelink,
    githublink,
    techStack[]->{
     title,      
     _id
},
   publishedAt
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
export const getArticles = `*[_type == "articles"] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  coverImage,
  content
}`;
export const getArticle = `
  *[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    coverImage,
    content
  }
`;
