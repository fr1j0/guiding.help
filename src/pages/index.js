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
    <BioSecondary
      background={true}
      side="left"
      title="Duis in qui labore magna minim ut cillum amet incididunt consectetur Lorem non exercitation."
      description="Cupidatat aliquip voluptate ea deserunt enim consequat. Nulla et labore magna eu duis culpa non incididunt tempor id. Qui proident aute eu eu incididunt nulla deserunt officia cupidatat consequat occaecat sint commodo velit. Deserunt proident aliqua elit sit magna fugiat ea commodo elit ea dolor ex enim. Labore laboris aute nulla amet aute velit magna adipisicing consectetur eiusmod."
    />
    <Motivation
      header="Happiness"
      description="Happiness is not the absence of having problems, but the ability and skills to deal with them."
    />
    <BioSecondary
      side="right"
      title="Consequat est nisi ullamco excepteur proident pariatur sint dolor consequat ea dolore anim."
      description="Aliqua anim fugiat magna velit ad ipsum ullamco qui exercitation ut labore ipsum. Et elit pariatur pariatur cillum cupidatat consequat incididunt incididunt dolor magna pariatur eu. Est est enim fugiat qui veniam cillum Lorem."
    />
  </Layout>
)

export default IndexPage
