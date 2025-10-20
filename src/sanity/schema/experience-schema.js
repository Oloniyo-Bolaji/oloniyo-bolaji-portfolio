export default {
  name: "experience",
  title: "Experience",
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
      name: "position",
      title: "Position",
      type: "string",
    },
     {
      name: "duration",
      title: "Duration",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description:
        "Set a number to control project display order (lower = higher priority)",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};
