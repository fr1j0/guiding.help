import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import "../components/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <StaticImage
      class="logo"
      src="../images/guiding-logo.svg"
      width={100}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Guiding help"
      style={{ marginBottom: `1.45rem` }}
      layout="fullWidth "
    />
  </Layout>
)

export default IndexPage
