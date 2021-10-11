import {format} from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some front ends will require a slug to be set to be able to show the post',
      options: {
           source: doc => `gloss-${doc.title}`, 
           maxLength: 96       
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'isDraft',
      type: 'boolean',
      title: 'draft',
      initialValue: true,
      description: 'should the document be published or not',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'authorReference'
        }
      ]
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'isMarkDown',
      type: 'boolean',
      title: 'is a markdown post',
      initialValue: false,
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body (Portable Text)',
      hidden: ({document}) => document?.isMarkDown,

    },
    {
      name: 'bodyMD',
      type: 'markdown',
      title: 'Body (MarkDown)',
      hidden: ({document}) => !document?.isMarkDown,

    }, 
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo-tools', // use seo-tools type
      options: {
          baseUrl: 'https://sanity-sapper-blog-studio-8durc1cx.netlify.app//', // (REQUIRED) This is the baseUrl for your site
          baseUrl(doc) {
              return 'https://sanity-sapper-blog-studio-8durc1cx.netlify.app//'; // for dynamic baseUrls
          },
          slug(doc) { // (REQUIRED) a function to return the sug of the current page, which will be appended to the baseUrl
              return doc.slug.current;
          },
          fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
          content(doc) {
              return 'simple html representation of your doc'; // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
          },
          title(doc) {
              return 'page title'; // (OPTIONAL) return page title otherwise inferred from scrape
          },
          description(doc) {
              return 'page description'; // (OPTIONAL) return page description otherwise inferred from scrape
          },
          locale(doc) {
              return 'page locale'; // (OPTIONAL) return page locale otherwise inferred from scrape
          },
          contentSelector: 'body' // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
      }
    },
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        },
       
      ]
    }
  ],
  //initialValue: () => ({
  //  isMarkDown: false,
  //  releaseDate: (new Date()).toISOString()
  //}),
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      isDraft: 'isDraft',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, isDraft, slug, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM') ;
      const path = `/${dateSegment}/${slug.current}/`;     
      const pubDate = publishedAt ? path : 'Missing publishing date';
      const sub_title = isDraft ? 'draft' : pubDate;

      return {
        title,
        media,
        //subtitle: publishedAt ? path : 'Missing publishing date'
        subtitle: sub_title,
      }
    }
  }
}
