const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allTutorialsYaml {
        edges {
          node {
            id
            name
            courseId
            author
            description
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allTutorialsYaml.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/pages/course-detail.js`),
        context: {
          ...node,
        },
      })
    })
  })
}
