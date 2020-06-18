export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5eeb80e7167a9b88e638f4d9',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog2-studio-r1a5e6r2',
                  apiId: '19bda39d-8641-403c-afd9-4e7e1b266797'
                },
                {
                  buildHookId: '5eeb80e7a9c61b74ca09715e',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog2-web-jchffup7',
                  apiId: '0552dfae-f9f7-4b23-bbef-a8be8ab3a30d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/courcelan/sanity-gridsome-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog2-web-jchffup7.netlify.app', category: 'apps'}
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
