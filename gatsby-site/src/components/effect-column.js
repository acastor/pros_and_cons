import React from "react"
import EffectList from "./list"
import ListForm from "./list-form"
import useEffectState from "./useEffectState"

const EffectColumn = ({ placeholder, title }) => {
  const { effects, saveEffect, deleteEffectAtIndex } = useEffectState([])
  return (
    <div>
      <h1>{title}</h1>
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
