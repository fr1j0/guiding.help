import * as React from "react"
import Layout from "../components/layout"
import MyStory from "../components/my-story"
import SEO from "../components/seo"

const MyStoryPage = () => (
  <Layout>
    <SEO title="My story" />
    <MyStory />
  </Layout>
)

export default MyStoryPage
