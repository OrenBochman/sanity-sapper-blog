export default {
  // TODO: add generics
    name: 'umlMethod',         title: 'umlMember',
    type: 'object',     descriptions: 'a class member',
 fields: [
  { name: 'name',              title: 'Name',
    type: 'string',      description: 'method name'    },
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
   { name: 'parameters',         title: 'parameters',    description: 'method parameters',
    type: 'array',                of: [{type:'umlVariable'}]
  },
  { name: 'returnType',         title: 'Return Type',
    type: 'string',       description: 'return term'    },
  { name: 'isAbstract',         title: 'is abstract',
    type: 'boolean',      description: 'if it is abstract' },
  { name: 'isStatic',           title: 'is static',
    type: 'boolean',      description: 'if it is static'  },
   ],
 preview: { select: 
  { 
    visibility: 'visibility',
    returnType: 'returnType',
    title: 'name',
    parameters:'parameters',
    isAbstract:'isAbstract',
    isStatic:'isStatic',

      },  
  prepare ({title = 'untitled', returnType='', visibility='',parameters=[]}) {
  //    const params = parameters.length > 0 ?  `${parameters.join(', ')}` : '';
        const reducer = (previousValue, currentValue) => `${previousValue}${previousValue.length>0 ? ', ':''}${currentValue.name} : ${currentValue.type}`;
  //    const reducer = (previousValue, currentValue) =>  + `${previousValue}, ${currentValue}`;

        const params = parameters.length > 0 ?  `${parameters.reduce(reducer,'')}` : '';
        const ttl = `${visibility}${title}(${params})${ (returnType != '') ? ':':'' }${returnType}`;
        return {
          title: ttl,
          //media,
          //subtitle: publishedAt ? path : 'Missing publishing date'
          //subtitle: sub_title,
        }
      
      }
    },
}
