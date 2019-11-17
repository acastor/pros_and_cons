import React from "react"
import styled from "styled-components"

const Input = styled.input`
  color: #333;
  width: 90%;
  box-sizing: border-box;
  letter-spacing: 1px;
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid #ccc;
`

const InputWrapper = styled.div`
  position: relative;
  :focus { outline: none; }
`

const FocusBorder = styled.span`
  ${Input} ~ & {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #4caf50;
    transition: 0.4s;
  }

  ${Input}:focus ~ & {
    width: 90%;
    transition: 0.4s;
    left: 0;
  }
`

const TextField = ({ onChange, value, placeholder }) => {
  return (
    <InputWrapper>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
        className="effect-input"
      />
      <FocusBorder />
    </InputWrapper>
  )
}

export default TextField
