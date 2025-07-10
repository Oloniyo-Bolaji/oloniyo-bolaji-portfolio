export default {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "greeting",
      title: "Greeting",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "url",
    },
    {
      name: "github",
      title: "Github",
      type: "url",
    },
    {
      name: "linkedIn",
      title: "LinkedIn",
      type: "url",
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
