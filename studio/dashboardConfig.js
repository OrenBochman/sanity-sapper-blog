export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615ac6661218004d7770f10c',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-8durc1cx',
                  apiId: 'e462ffdd-c231-48fa-9693-bc56b0b49df3'
                },
                {
                  buildHookId: '615ac6668f6c0aabc6eb30a2',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-oz3im2j8',
                  apiId: '2e545ce3-1cbe-4f2c-a205-27a7e5fc63fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/OrenBochman/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-oz3im2j8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
