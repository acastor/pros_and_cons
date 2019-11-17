import { useState } from "react"

export default (initialValue) => {
  const [effects, setEffects] = useState(initialValue)

  return {
    effects,
    saveEffect: (newEffect, effects) => {
      const trimmedEffect = newEffect.trim()
      if (trimmedEffect.length > 0) {
        setEffects([...effects, trimmedEffect])
      }
    },
    deleteEffectAtIndex: (effects, effectIndex) => {
      const newEffects = effects.filter((_, index) => index !== effectIndex)
      setEffects(newEffects)
    },
  }
}
