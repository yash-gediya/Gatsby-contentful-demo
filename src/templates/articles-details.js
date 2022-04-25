import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const articlesDetails = ({ data }) => {
  console.log(data)
  return (
    <div>
      {" "}
      <Layout>
        <div>
          <h1>{data.contentfulArticle.title}</h1>
          <br />
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulArticle.description,
            }}
          />
        </div>
      </Layout>
    </div>
  )
}

export default articlesDetails

export const query = graphql`
  query articleQuery($title: String) {
    contentfulArticle(title: { eq: $title }) {
      author
      title
      description
    }
  }
`
