import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

const Navabar = () => {
  //..........static-query............................

  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
          description
          copyright
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navabar
