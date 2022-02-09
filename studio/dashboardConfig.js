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
                  buildHookId: '6204518ade08a05539ba3c7b',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-51suj547',
                  apiId: '2568ed89-f241-4598-9812-753f89d54d15'
                },
                {
                  buildHookId: '6204518ad3985e48f8c88389',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-fp49eoia',
                  apiId: '86598af6-3876-46a0-b496-d814ee4a3891'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bigrender/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-fp49eoia.netlify.app', category: 'apps'}
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
