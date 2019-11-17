import React from "react"
import EffectList from "./list"
import ListForm from "./list-form"
import useEffectState from "./useEffectState"
import styled from "styled-components"

const Title = styled.h1`
  text-align: center;
`

const EffectColumn = ({ placeholder, title }) => {
  const { effects, saveEffect, deleteEffectAtIndex } = useEffectState([])
  return (
    <div>
      <Title>{title}</Title>
      <div>
        <ListForm
          placeholder={placeholder}
          saveList={newInput => {
            saveEffect(newInput, effects)
          }}
        />
        <EffectList
          effects={effects}
          deleteEffect={index => deleteEffectAtIndex(effects, index)}
        />
      </div>
    </div>
  )
}

export default EffectColumn
