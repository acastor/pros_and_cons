import React from "react"
import TextField from "./text-field"
import useInputState from "./useInputState"

const ListForm = ({ saveList, placeholder }) => {
  const { value, onChange, reset } = useInputState("")
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        saveList(value)
        // clear the input for further additions
        reset()
      }}
    >
      <TextField placeholder={placeholder} onChange={onChange} value={value} />
    </form>
  )
}

export default ListForm
