import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import avatar from "../images/me_all_copy.jpg"

const Container = styled.div`
    margin:0 auto;
    width: 100%;
    @media (min-width: 1000px) {
    display: flex;
    width: 90%;
    }
`
const Sidebar = styled.div`
  width:25%;
  height: 20%;
  background-color: white;
  @media (max-width: 1000px) {
    width: 95%;
    height: auto;
    margin: 0 auto;
    display:flex;
  }
`
const ContentBlock = styled.div`
  width:75%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`

export default ({ data }) => {
    console.log(data)
    return (
        <Layout>
            <SEO title="ayutech-blog" />
            <Container>
                <ContentBlock>
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
                </ContentBlock>
                <Sidebar>
                    <img className="" src={avatar} alt="me" class="avatar" />
                    <div className="card-content">
                        <div className="card-title">
                            アユム
                            <br />
                            <a href="https://twitter.com/ex_endeavor">
                                <FontAwesomeIcon className="fa--twitter" icon={faTwitter} size="lg" />
                            </a>
                            <a href="https://github.com/ayumubanban">
                                <FontAwesomeIcon className="fa--github" icon={faGithub} size="lg" />
                            </a>
                        </div>
                        <p className="">
                            ソフトウェアエンジニアを目指し、日々邁進中です。
                        </p>
                    </div>
                </Sidebar>
            </Container>
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
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`