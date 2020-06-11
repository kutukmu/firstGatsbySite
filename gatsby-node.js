const path = require("path")




exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogtemplate = path.resolve("./src/templates/blog.js")
    const res = await graphql(`
    query{allContentfulBlogPost{edges{node{
      
          slug
      }}}}`)

    res.data.allContentfulBlogPost.edges.forEach((n) => {
        createPage({
            component: blogtemplate,
            path: `/About/${n.node.slug}`,
            context: {
                slug: n.node.slug
            }
        })
    })

}