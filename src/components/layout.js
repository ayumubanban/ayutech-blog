import React from "react"
// import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import "./layout.css"
import Header from "./header"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query{
                site{
                    siteMetadata{
                        title
                    }
                }
            }
        `
    )
    return(
        <div>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="layout-div">
                {/* <div className="layout-header">
                    <Link to={`/`}>
                        <h3
                            className="layout-h3"
                        >
                            {data.site.siteMetadata.title}
                        </h3>
                    </Link>
                    <Link
                        to={`/about/`}
                        className="layout-about"
                    >
                        About
                    </Link>
                </div> */}
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built by {` `}
                    Ayumu.
                </footer>
            </div>
        </div>
    )
}