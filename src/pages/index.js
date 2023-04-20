import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as styles from "../components/index.module.css"
import '../components/styles/fade.css'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.textCenter}>
      <div className="Icon">
        <h1>
          Welcome to Yu Ishii's Blog!
        </h1>
      </div>
      <div className="Comment">
        <div className={styles.list}>
          {data.allMicrocmsBlogs.edges.map(({ node }) => (
            <Link to={`/blog/${node.blogsId}`} className={styles.listItem} key={node.blogsId}>
              {node.eyecatch && (
                <div className={styles.textCenter}>
                  <img src={node.eyecatch.url} alt={node.title} height="100px" />
                </div>
              )}
              <p>{node.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsBlogs(sort: {createdAt: DESC}) {
      edges {
        node {
          blogsId
          title
          content
          eyecatch {
            height
            url
            width
          }
        }
      }
    }
  }
`
