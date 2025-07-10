export default {
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Technology Name",
      type: "string",
    },
   {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "")     
            .replace(/\./g, "dot")   
            .replace(/[^\w\-]+/g, ""), 
      },
    },
  ],
};
