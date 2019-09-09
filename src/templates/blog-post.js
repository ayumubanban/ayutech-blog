import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <SEO title={post.frontmatter.title} description="ayutech-blog" />
            <div className="bg-post">
                <h1>{post.frontmatter.title}</h1>
                <p className="post-date">
                  {post.frontmatter.date}
                </p>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
      }
    }
  }
`