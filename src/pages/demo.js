// import { graphql } from "gatsby"
// import React from "react"

// const Demo = ({ data }) => {
//   console.log(data.allContentfulBlog.edges)
//   const imageData = data.allContentfulBlog.edges
//   return (
//     <div>
//       {imageData &&
//         imageData?.map(item => {
//           console.log(item?.node?.image?.file?.url)
//           return <img src={item?.node?.image?.file?.url} alt="image" />
//         })}
//     </div>
//   )
// }

// export default Demo

// export const query = graphql`
//   query {
//     allContentfulBlog {
//       edges {
//         node {
//           image {
//             resize {
//               src
//             }
//             file {
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// `
