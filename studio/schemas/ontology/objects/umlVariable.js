export default {
  name: 'umlVariable',         title: 'Variable',
  type: 'object',     descriptions: 'a class member',
  fields: [ 
  { name: 'type',  title: 'Type',  type: 'string'},
  { name: 'name',  title: 'Name',  type: 'string'},],
  preview: { select: 
    { 
      type: 'type',
      title: 'name',
  
        },  
    prepare ({title = 'untitled', type=''}) {
          const ttl = `${title}: ${type}`;
          return {
            title: ttl,
          }
        
        }
      },
}