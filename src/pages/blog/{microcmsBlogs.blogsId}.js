import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title={data.microcmsBlogs.title} />
    <h1>{data.microcmsBlogs.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsBlogs.content}`,
      }}
    />
  </Layout>
)

export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsBlogs(id: { eq: $id }) {
      blogsId
      title
      content
    }
  }
`