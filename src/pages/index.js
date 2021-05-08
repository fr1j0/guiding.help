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
    <Bio img="jo-header.jpg" />

    <ServicesPods />
    <Motivation
      header="Embrace your inner peace"
      description="When you find peace within yourself you become the kind of person who can live in peace with others."
    />
    <BioSecondary
      side="left"
      title="Retrain your anxious brain."
      description=""
    />
    <Motivation
      header="Unleash your full potential"
      description="You are braver than you believe, stronger than you seem and smarter than you think."
    />
    <BioSecondary side="right" title="Why counselling?" description="" />
  </Layout>
)

export default IndexPage
