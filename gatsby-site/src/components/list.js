import React from "react"
import styled from "styled-components"

const List = styled.ul`
  list-style-type: none;
`

const ItemWrapper = styled.div`
  display: grid;
  grid-auto-columns: minmax(0, 1.75fr) .25fr;
  grid-auto-flow: column;
`

const DeleteButton = styled.button`
  background-color: crimson;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: red;
  }
`

const EffectList = ({ effects, deleteEffect }) => (
  <List>
    {effects.map((effect, index) => (
      <li key={index.toString()}>
        <ItemWrapper>
          <span>{effect}</span>
          <div>
            <DeleteButton
              onClick={() => {
                deleteEffect(index)
              }}
            >
              x
            </DeleteButton>
          </div>
        </ItemWrapper>
      </li>
    ))}
  </List>
)

export default EffectList
