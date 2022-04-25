import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import "../../src/pages/styles/home.css"

const Home = ({ data }) => {
  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Delay</h3>
          <p>UX designer & web developer based in Mancherster.</p>
          <Link className="btn" to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img
          src={data.file.childImageSharp.fluid.src}
          alt="site banner"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  )
}

// ............page-Query............

export default Home
// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         title
//         description
//         copyright
//       }
//     }
//   }
// `

export const query = graphql`
  query banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`
