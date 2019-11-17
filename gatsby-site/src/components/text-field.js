import React from "react"

const TextField = ({ onChange, value, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type="text"
    />
  )
}

export default TextField;