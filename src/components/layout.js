import React from "react"
// import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import "./layout.css"

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
        <div
            className="layout-div"
        >
            <div className="layout-header">
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
            </div>
            {children}
        </div>
    )
}