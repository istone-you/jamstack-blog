import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {data.allMicrocmsBlogs.edges.map(({ node }) => (
        <li key={node.blogsId}>
          <Link to={`/blog/${node.blogsId}`}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsBlogs {
      edges {
        node {
          blogsId
          title
          content
        }
      }
    }
  }
`
