export default {
  name: 'umlClass',
  type: 'document',        title: 'Class',
  fields: [
    { name: 'name',        title: 'name',
      type: 'string',      
    },
    { name: 'slug',         title: 'Slug',
      type: 'slug', 
      description: 'required by some front ends',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'members',       title: 'Members',
      type: 'array', of: [{type:'umlMember'}],
    },
    {
      name: 'methods', title: 'Methods',
      type: 'array', of: [{type:'umlMethod'}],
    },
    // this should go into a umlClassDiagram.
    // {
    //   name: 'relations', title: 'relations',
    //   type: 'array', of: [{type:'umlRelation'}], // this should be selected from a list like in umlVisibility
    // },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
    }
  }
}
