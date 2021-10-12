import {GiLipstick as icon} from 'react-icons/gi' 

export default {
     name: 'glossary',   title: 'Glossary',     type: 'document', descriptions: 'short definitions to be used in popups etc', icon,
  fields: [
    { name: 'title',      title: 'Title',       type: 'string',   description: 'term'    },
    { name: 'slug',       title: 'Slug',        type: 'slug',     description: 'some front ends will require a slug',       options: {   source: doc => `gloss-${doc.title}`,   maxLength: 96       }     },
    { name: 'author',     title: 'Author',      type: 'array',    of: [{type: 'authorReference'}] },
    { name: 'category',   title: 'Categories',  type: 'array',    of: [{type: 'reference', to: { type: 'category'          }        }      ]    },
    { name: 'body',       title: 'Body ',       type: 'markdown',  }, 
  ],
  preview: { select: { title: 'title', slug: 'slug',  },  }
}
