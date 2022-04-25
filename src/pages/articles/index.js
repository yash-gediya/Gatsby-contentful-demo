import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/layout"

const index = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1> Latest Posts</h1>
        {data?.allContentfulArticle?.edges?.map(post => {
          return (
            <div key={post?.node?.id}>
              <h3>{post?.node?.title}</h3>
              <small>
                {" "}
                Posted By {post?.node?.author} on {post?.node?.createdDate}
              </small>
              <br />
              <br />
              <Link to={post?.node?.title}>Read More...</Link>
              <br />
              <br />
              <hr />
              <br />
              <br />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default index

export const pageQuery = graphql`
  query ArticleQuery {
    allContentfulArticle {
      edges {
        node {
          author
          description
          createdDate
          title
        }
      }
    }
  }
`
