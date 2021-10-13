export default {
  name: 'umlMember',         title: 'umlMember',
  type: 'object',     descriptions: 'a class member',
  fields: [ 
    { 
      name: 'visibility',   title: 'visibility',  
      type: 'string', 
      options: {
        list: [
          { title: 'Public', value: '+'},
          { title: 'Private', value: '-'},
          { title: 'Protected', value: '~'},
          { title: 'Package', value: '§'},  ]}
  },
  { name: 'type',              title: 'Type',
    type: 'string',      description: 'term'           },
  { name: 'name',              title: 'Name',
    type: 'string',      description: 'term'           },
  { name: 'isAbstract',            title: 'Return Type',
    type: 'boolean',      description: 'if it is abstract' },
  { name: 'isStatic',            title: 'Return Type',
    type: 'boolean',      description: 'if it is static'  },
   ],
   preview: { select: 
    { 
      visibility: 'visibility',
      type: 'type',
      title: 'name',
      isAbstract:'isAbstract',
      isStatic:'isStatic',
  
        },  
    prepare ({title = 'untitled', type='', visibility=''}) {
          const ttl = `${visibility}${title}: ${type}`;
          return {
            title: ttl,
            //media,
            //subtitle: publishedAt ? path : 'Missing publishing date'
            //subtitle: sub_title,
          }
        
        }
      },
  }
  