import {format} from 'date-fns'
import {IoCardSharp as icon} from 'react-icons/io' 

export default {
  name: 'pattern',
  type: 'document',
  title: 'Design Pattern',
  icon,
  fields: [

    // Pattern Name and Classification: A descriptive and unique name that helps in identifying and referring to the pattern.
    {
      name: 'name',                 title: 'Pattern Name and Classification',
      type: 'string',         description: 'A descriptive and unique name that helps in identifying and referring to the pattern'
    },
    // Intent: A description of the goal behind the pattern and the reason for using it. 
    {
        name: 'intent',                 title: 'Intent',
        type: 'markdown',         description: 'A description of the goal behind the pattern and the reason for using it'
    },
    // Also Known As: Other names for the pattern.
    {
        name: 'aka',                 title: 'Also Known As',
        description: 'Other names for the pattern',
        type: 'array',         
        of:[{type:'string'}],         
      },
    //  Motivation (Forces): A scenario consisting of a problem and a context in which this pattern can be used.
    {
        name: 'motivation',                 title: 'Motivation (Forces)',
        type: 'markdown',             description: 'A description of the goal behind the pattern and the reason for using it'
    },
    // Applicability: Situations in which this pattern is usable; the context for the pattern.
    {
        name: 'applicability',                 title: 'Applicability (Forces)',
        type: 'markdown',                description: 'Situations in which this pattern is usable; the context for the pattern'
    },
    // Structure: A graphical representation of the pattern. Class diagrams and Interaction diagrams may be used for this purpose.
    {
        name: 'structure',                 title: 'Structure',
        type: 'markdown',                description: 'Structure: A graphical representation of the pattern. Class diagrams and Interaction diagrams may be used for this purpose'
    },
    // Participants: A listing of the classes and objects used in the pattern and their roles in the design.
    {
        name: 'participants',                 title: 'Participants',
        type: 'markdown',                description: 'A listing of the classes and objects used in the pattern and their roles in the design.'
    },
    // Collaboration: A description of how classes and objects used in the pattern interact with each other.
    {
        name: 'collaboration',                 title: 'Collaboration',
        type: 'markdown',                description: 'How classes and objects used in the pattern interact with each other'
    },
    //Consequences: A description of the results, side effects, and trade offs caused by using the pattern.
    {
        name: 'Consequences',                 title: 'Consequences',
        type: 'markdown',                description: 'The results, side effects, and trade offs caused by using the pattern'
    },
    // Implementation: A description of an implementation of the pattern; the solution part of the pattern.
    {
        name: 'implementation',                 title: 'Implementation',
        type: 'markdown',                description: 'The solution part of the pattern'
    },
    // Sample Code: An illustration of how the pattern can be used in a programming language.
    // Consider array of files - but markdown code blocks would do fine
    {
        name: 'sample',                        title: 'Sample Code',
        type: 'markdown',                description: 'An illustration of how the pattern can be used'
    },
    // Known Uses: Examples of real usages of the pattern.
    {
        name: 'uses',                       title: 'Known Uses',
        type: 'markdown',             description: 'Examples of real usages of the pattern'
    },
    // Related Patterns: Other patterns that have some relationship with the pattern; discussion of the differences between the pattern and similar patterns.
    {
        name: 'related',                 title: 'Related Patterns',
        type: 'markdown',                description: 'Other patterns that have some relationship with the pattern; discussion of the differences between the pattern and similar patterns.'
    },

    ///////////// METADATA & STATE
    {
      name: 'slug',      title: 'Slug',
      type: 'slug',      description: 'Some front ends will require a slug to be set to be able to show the post',
      options: {
           source: doc => `pattern-${doc.name}`, 
           maxLength: 96       
      },
    },
    {
      name: 'isDraft',
      type: 'boolean',
      title: 'draft',
      initialValue: true,
      description: 'should this document be published',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
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
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title',  isDraft, media}) {
      const sub_title = isDraft ? 'draft' : '';
      return {
        title,
        media,
        subtitle: sub_title,
      }
    }
  }
}
