export default {

    name: 'umlVisibility',   title: 'Visibility',
    type: 'object',
    fields: [{ 
        name: 'visibility',   title: 'visibility',  
        type: 'string', 
        options: {
          list: [
            { title: 'Public', value: 'public'},
            { title: 'Private', value: 'private'},
            { title: 'Protected', value: 'protected'},
            { title: 'Package', value: 'package'},
          ]
        }
    }],

}