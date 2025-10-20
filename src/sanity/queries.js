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
     slug,     
     _id
},
   publishedAt
    }`;
export const getTechStack = `*[_type == "technology"]{
    _id,
    slug,
    title,
    }`;

export const getExperience = `*[_type == "experience"] | order(order asc){
    _id,
    title,
    slug,
    description,
    position,
    duration,
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
