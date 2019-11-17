import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeAloneImg from "../images/home_alone.gif"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <img src={HomeAloneImg} alt="home alone scream" />
    <h1>WOAH WOAH WOAH</h1>
    <p>You just hit a nonexistent route, get outta here ya filthy animal!</p>
  </Layout>
)

export default NotFoundPage
