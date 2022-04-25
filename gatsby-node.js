const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query MyQuery {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulArticle {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  data.allContentfulBlog.edges.forEach(item => {
    actions.createPage({
      path: "/products/" + item.node.slug,
      component: path.resolve("./src/templates/projects-details.js"),
      context: { slug: item.node.slug },
    })
  })

  data.allContentfulArticle.edges.forEach(item => {
    actions.createPage({
      path: "/articles/" + item.node.title,
      component: path.resolve("./src/templates/articles-details.js"),
      context: { title: item.node.title },
    })
  })
}
