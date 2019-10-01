/**
 * Layout component for all the pages of the site
 */

import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
// // import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "./layout.css"
import styles from "./layout.module.css"

const Layout = props => {
  const data = useStaticQuery(graphql`
    {
      navbarBgVer: file(relativePath: { eq: "navbar-ver.jpeg" }) {
        childImageSharp {
          fluid(maxHeight: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      navbarBgHor: file(relativePath: { eq: "navbar-hor.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const sources = [
    data.navbarBgVer.childImageSharp.fluid,
    {
      ...data.navbarBgHor.childImageSharp.fluid,
      media: `(min-width: 580px)`,
    },
  ]
  console.log(data)
  return (
    <div id={styles.layout}>
      <nav id={styles.navbar}>
        <div id={styles.navbarBackground}>
          <Img style={{ height: "100%" }} fluid={sources} />
        </div>
        <div id={styles.navbarLinkContainer}>
          <Link className={styles.navLink} to="/">
            HOME
          </Link>
          <Link className={styles.navLink} to="/about/">
            ABOUT
          </Link>
          <Link className={styles.navLink} to="/contact/">
            CONTACT
          </Link>
        </div>
      </nav>
      <main id={styles.main}>
        <header id={styles.mainHeader}>
          <h1>{props.headerText}</h1>
        </header>
        <div id={styles.content}>{props.children}</div>
      </main>
      {/* <footer> */}
      {/*   © {new Date().getFullYear()}, Built with */}
      {/*   {` `} */}
      {/*   <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      {/* </footer> */}
    </div>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
export default Layout
