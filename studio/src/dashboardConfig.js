export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6045aa74f32a8de057684d15',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5gsnmdxb',
                  apiId: '5243febd-8da4-4f16-ac96-cf2334e2e2b3'
                },
                {
                  buildHookId: '6045aa74707d1c5aaba3da3a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hg3x26wa',
                  apiId: 'aae3c53d-f644-441d-897e-86424df723f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nearbycoder/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hg3x26wa.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
