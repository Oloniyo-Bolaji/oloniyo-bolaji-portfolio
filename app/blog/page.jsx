

import ParticlesBgComponent from "@/components/ParticlesWrapper";
import React from "react";
import { client } from "@/src/sanity/client";
import { getArticles } from "@/src/sanity/queries";
import BlogCard from "@/components/BlogCard";


const options = { next: { revalidate: 30 } };

const Blog = async () => {
  const articles = await client.fetch(getArticles, {}, options);
console.log(articles)
  return (
    <div className="relative">
      <ParticlesBgComponent />

      <div className="relative z-10 ">
        <main className="">
          <h2 className="text-center uppercase font-bold my-[10px] text-gradient">
            My Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[10px] items-start">
            {articles.map((article, index) => (
              <BlogCard article={article} key={article._id} index={index}/>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blog;
