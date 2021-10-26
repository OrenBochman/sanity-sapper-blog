// helpArticle.js
export default {
    name: 'helpArticle',
    type: 'document',
    title: 'Help article',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'body',
        type: 'markdown',
        title: 'Body',
      },
      {
        name: 'faqs',
        type: 'array',
        title: 'Frequently Asked Questions',
        of: [
          {
            type: 'faq'
          }
        ]
      }
    ]
  }