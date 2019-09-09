import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"


const Header = ({ siteTitle }) => (
    <header
        style={{
            background: `#1976d2`,
            marginBottom: `1.0rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 1050,
                padding: `0.5rem 30px`,
                display: `flex`
            }}
        >
            <h1 style={{
                margin: 0,
                fontSize: `1.4rem`,
                lineHeight: `49px`
            }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
            <div className="" style={{
                marginLeft: `auto`,
            }}>
                <a href="https://twitter.com/ex_endeavor">
                    <FontAwesomeIcon className="" icon={faTwitter} size="2x" style={{
                        margin: `10px 5px 5px`,
                        color: `white`
                    }} />
                </a>
                <a href="https://github.com/ayumubanban">
                    <FontAwesomeIcon className="" icon={faGithub} size="2x" style={{
                        margin: `10px 5px 5px`,
                        color: `white`
                    }} />
                </a>
            </div>
        </div>

    </header>
)

export default Header
