export default {
  name: 'coloredTag',
  type: 'document',
  title: 'colored tag',
  description: 'tag to color mapping'
  fields: [
    {
      name: 'color',
      title: 'Color',
      type: 'colorPicker'
    },
    {
      name: 'tag',
      title: 'tag',
      type: 'reference',
      of : [{type: 'category'}],      
    },
  ],
  preview: {
    select: {
      title: 'tag',
      subtitle: 'color',
    }
  }
}
