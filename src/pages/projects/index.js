import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"
import "../styles/projects.css"

const Projects = ({ data }) => {
  const projects = data.allContentfulBlog.edges
  const contact = data.site.siteMetadata.contact

  return (
    <Layout>
      <div className="portfolio">
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className="projects">
          {projects.map(item => {
            return (
              <div>
                <Link to={"/projects/" + item.node.slug} key={item.id}>
                  <img
                    src={item.node.thumb.file.url}
                    style={{ maxWidth: "100%" }}
                    alt="productBanner"
                  />
                  <h3>{item.node.title}</h3>
                  <p>{item.node.stack}</p>
                </Link>
              </div>
            )
          })}
        </div>
        <p>Like what you see ? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query Myquery {
    allContentfulBlog {
      edges {
        node {
          title
          stack
          slug
          createdAt
          thumb {
            file {
              url
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        contact
      }
    }
  }
`
