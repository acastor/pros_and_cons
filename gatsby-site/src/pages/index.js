import React from "react"
import Layout from "../components/layout"
import EffectList from "../components/list"
import ListForm from "../components/list-form"
import SEO from "../components/seo"
import useEffectState from "../components/useEffectState"

const IndexPage = () => {
  const {
    effects: pros,
    saveEffect: savePros,
    deleteEffectAtIndex: deletePro,
  } = useEffectState([])
  const {
    effects: cons,
    saveEffect: saveCons,
    deleteEffectAtIndex: deleteCons,
  } = useEffectState([])

  return (
    <Layout>
      <SEO title="Home" />
      <h1>PROS</h1>
      <ListForm
        placeholder="One positive effect of this decision is..."
        saveList={proText => {
          savePros(proText, pros)
        }}
      />
      <EffectList
        effects={pros}
        deleteEffect={index => deletePro(pros, index)}
      />

      <h1>CONS</h1>
      <ListForm
        placeholder="One negative effect of this decision is..."
        saveList={conText => {
          saveCons(conText, cons)
        }}
      />
      <EffectList
        effects={cons}
        deleteEffect={index => deleteCons(cons, index)}
      />
    </Layout>
  )
}

export default IndexPage
