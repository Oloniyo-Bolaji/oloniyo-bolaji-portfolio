import Image from "next/image";
import { urlFor } from "./imageBuilder";

export const components = {
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value).url();
      if (!imageUrl) return null;

      return (
        <figure className="my-4">
          <div className="relative w-full h-[300px] my-6">
            <Image
              src={imageUrl}
              alt={value.alt || "Blog image"}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              loading="lazy"
              className="object-cover rounded-md"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-[#00274d]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3 text-[#00274d]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-5 mb-2 text-[#00274d]">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="leading-6 text-sm text-[#7a7a7a] mb-2 text-justify">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 text-slate-300 text-sm">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 text-slate-300">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          target={rel ? "_blank" : "_self"}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-extrabold text-blue">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
  },
};
