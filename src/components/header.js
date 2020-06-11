import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"


const Header = () => {

    const title = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            title
          }
        }
      }
    `)

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">{title.site.siteMetadata.title}</Link>
            </h1>
            <nav className={headerStyles.navbar}>
                <ul>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.active} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.active} to="/About">About</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.active} to="/Portfolio">Portfolio</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.active} to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header