/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import "./layout.css"
import "./global.sass"

const Layout = ({ children }) => {
  const mainRef = useRef(null)
  const [block1st, setBlock1st] = useState()
  const [headerScrolled, setheaderScrolled] = useState(false)

  useEffect(() => {
    if (!block1st) return

    let options = {
      rootMargin: "-810px 0px 0px 0px",
    }

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        console.log(entry)
        setheaderScrolled(!entry.isIntersecting)
      })
    }, options)

    observer.observe(block1st)

    return () => {
      observer.unobserve(block1st)
    }
  }, [block1st])

  useEffect(() => {
    setBlock1st(document.querySelector(".block-1st"))
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title}
        scrolled={headerScrolled}
      />
      <main ref={mainRef} className="main__content">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
