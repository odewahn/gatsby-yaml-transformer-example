const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allTutorialsYaml {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allTutorialsYaml.edges.forEach(({ node }) => {
      console.log(node)
      createPage({
        path: node.slug,
        component: path.resolve(`./src/pages/course-detail.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
