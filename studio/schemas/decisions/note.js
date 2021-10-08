export default {
  name: 'note',
  type: 'object',
  title: 'note',
  description: 'post it notes with color and tags'
  fields: [
    {
      name: 'body',
      type: 'text',
      title: 'body'
    },
    {
      name: 'color',
      title: 'Color',
      type: 'colorPicker'
    },
    {
      name: 'tag',
      title: 'tag',
      type: 'aray',
      of : [{type: 'coloredTag'}],
      // options: {
      //   filter: 'role == $role',
      //   filterParams: {role: 'director'}
      // }

    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
