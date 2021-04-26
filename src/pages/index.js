import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import BioSecondary from "../components/bio-secondary"
import ServicesPods from "../components/services-pods"
import Motivation from "../components/motivation"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bio />
    <ServicesPods />
    <Motivation
      header="Therapy, counselling and guidance."
      description="Therapy is not about allowing another influence to take control of your life. It's about you learning how to  make changes and take control."
    />
    <BioSecondary background={true} side="left" />
    <Motivation
      header="Happiness"
      description="Happiness is not the absence of having problems, but the ability and skills to deal with them."
    />

    <BioSecondary side="right" />
  </Layout>
)

export default IndexPage
