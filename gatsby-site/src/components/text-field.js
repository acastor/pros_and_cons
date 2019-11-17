import React from "react"
import "./text-field.css"

const TextField = ({ onChange, value, placeholder }) => {
  return (
    <div className="effect-input-wrapper">
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
        className="effect-input"
      />
      <span className="focus-border" />
    </div>
  )
}

export default TextField
