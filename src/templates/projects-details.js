import React from "react"
import Layout from "../components/layout"
import "../../src/pages/styles/project-details.css"
import { graphql } from "gatsby"

const ProjectDetails = ({ data }) => {
  console.log("111111111111 ", data)
  return (
    <Layout>
      <div className="details">
        <h2>{data?.contentfulBlog?.title}</h2>
        <h3>{data?.contentfulBlog?.stack}</h3>
        <div className="featured">
          <img
            src={data?.contentfulBlog?.featurrdImg?.file?.url}
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="html"
          dangerouslySetInnerHTML={{
            __html: data?.contentfulBlog.description.raw,
          }}
        />
      </div>
    </Layout>
  )
}

export default ProjectDetails

// export const query = graphql`
//   query MyQuery($slug: String) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         stack
//         fearturedImg {
//           childImageSharp {
//             fluid {
//               src
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query MyQuery($slug: String) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      stack

      description {
        raw
      }
      featurrdImg {
        file {
          url
        }
      }
    }
  }
`
