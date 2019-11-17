import React from "react"

const EffectList = ({ effects, deleteEffect }) => (
  <ul>
    {effects.map((effect, index) => (
      <li key={index.toString()}>
        <p>{effect}</p>
        <button
          onClick={() => {
            deleteEffect(index);
          }}
        >
          X
        </button>
      </li>
    ))}
  </ul>
)

export default EffectList;
