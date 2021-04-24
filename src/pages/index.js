import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import Services from "../components/services"
import Motivation from "../components/motivation"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bio />
    <Services />
    <Motivation
      header="Change starts with a single step"
      description="And that first step could be as simple as scheduling a no-cost discovery call to see if I’m the right person to help you make your difference."
    />
  </Layout>
)

export default IndexPage
