import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import "../../src/pages/styles/home.css"

const Home = ({ data }) => {
  const imgSrc = data.file.childImageSharp
  // console.log(data.file.childImageSharp)
  console.log(data.file.childrenImageSharp[0].fluid.src)
  const handleClick = () => {
    window.gtag("event", "click")
  }
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
          <button
            onClick={e => {
              e.preventDefault()
              window.dataLayer = window.dataLayer || []
              window.dataLayer.push({
                event: "buttonClick",
              })
            }}
          >
            Click me
          </button>

          <button
            onClick={e => {
              e.preventDefault()
              window.dataLayer = window.dataLayer || []
              window.dataLayer.push({
                category: "Button",
                action: "Click the button from first page",
              })
            }}
          >
            Google Analytics
          </button>
        </div>
        <img
          src={data.file.childrenImageSharp[0].fluid.src}
          alt="site banner"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  )
}

// ............page-Query............

export default Home

export const query = graphql`
  query BannerImg {
    file(relativePath: { eq: "banner.png" }) {
      childrenImageSharp {
        fluid {
          src
        }
      }
    }
  }
`
