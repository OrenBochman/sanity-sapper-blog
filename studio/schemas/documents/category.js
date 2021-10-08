export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      type: 'slug',name: 'slug',
      title: 'Slug',
      options: {  source: doc => `cat-${doc.title}`  },
    },
    {
      type: 'reference',
      to: [{type:'category'}],
      name:'parent'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}
