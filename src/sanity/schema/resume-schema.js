export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'file',
      title: 'Resume File (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    },
  ],
}
