/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useCallback, useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useDebouncedCallback } from "use-debounce"

import Header from "../components/header"
import Footer from "../components/footer"
import "./layout.css"
import "./global.sass"

const Layout = ({ children }) => {
  const mainRef = useRef(null)
  const [headerScrolled, setheaderScrolled] = useState(false)
  const [menuEnabled, setmenuEnabled] = useState(true)

  const resizeCheck = useDebouncedCallback(e => {
    setmenuEnabled(true)
  }, 500)

  const handleResize = useCallback(() => {
    setmenuEnabled(false)
    resizeCheck()
  }, [resizeCheck])

  const handleScroll = useCallback(e => {
    console.log(window.scrollY)
    setheaderScrolled(window.scrollY >= 50)
  }, [])

  useEffect(() => {
    window.addEventListener("resize", () => {
      setmenuEnabled(false)
      handleResize()
    })
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleResize, handleScroll])

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
        menuEnabled={menuEnabled}
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
