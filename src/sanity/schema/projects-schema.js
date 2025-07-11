export default {
  name: "projects",
  title: "Projects",
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
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "livelink",
      title: "LiveLink",
      type: "url",
    },
    {
      name: "githublink",
      title: "GithubLink",
      type: "url",
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description:
        "Set a number to control project display order (lower = higher priority)",
    },
    {
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};
