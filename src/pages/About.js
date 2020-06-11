import React from "react"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"
import { Link,useStaticQuery, graphql } from "gatsby"

const About = () => {

    const data = useStaticQuery(graphql`

    query{allContentfulBlogPost(
        sort:{fields:published
            order:DESC
        }
      ){edges{node{
        title
          slug
        published(formatString:"MMMM Do, YYYY")
      }}}}
    
    `)

    return (
        <Layout>
        <Head title="About" />
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map(n => {
                    return <li>
                        <h3>{n.node.title} // {n.node.published}</h3>
                        <Link to={`/About/${n.node.slug}`}> Read more</Link>
                    </li>
                })}
            </ol>
        </Layout>


    )
}

export default About