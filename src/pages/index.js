import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "./index.css"

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <div>
                {/* <h1
                    // css={css`
                    //     display: inline-block;
                    //     border-bottom: 1px solid;
                    // `}
                    className="index-siteTitle"
                >
                    Amazing Pandas Eating Things
                </h1> */}
                {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className="blog-posts">
                        <Link
                            to={node.fields.slug}
                            // css={css`
                            //     text-decoration: none;
                            //     color: inherit;
                            // `}
                            className="index-blogLink"
                        >
                            <h3
                                className="index-blogTitle"
                            >
                                {node.frontmatter.title}{" "}
                                <span
                                    // css={css`
                                    //     color: #bbb;
                                    // `}
                                    className="index-blogDate"
                                >
                                    — {node.frontmatter.date}
                                </span>
                            </h3>
                        <p>{node.excerpt}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`