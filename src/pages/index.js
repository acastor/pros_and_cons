import React from "react"
import Layout from "../components/layout"
import EffectColumn from "../components/effect-column"
import SEO from "../components/seo"
import styled from "styled-components"

const GridContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-auto-flow: column;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <GridContainer>
        <EffectColumn
          title="PROS"
          placeholder="One positive effect of this decision is"
        />
        <EffectColumn
          title="CONS"
          placeholder="One negative effect of this decision is"
        />
      </GridContainer>
    </Layout>
  )
}

export default IndexPage
