import React, { useState, useEffect, useContext } from 'react'
import { convertNumberToBase10, stripquotes } from '../utils'
import { question, valueBase10Descomposition } from '../types/game'
import GeneralContext from '../contexts/context'
import { onlyNumber } from '../constants/regex'

const useBase10Descomposition = (props: question) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const { value } = stripquotes(props.options) as valueBase10Descomposition
  const [value_, setValue] = useState(convertNumberToBase10(value))
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (!gameState.next) {
      const newValue = [...value_]

      const value = e.target.value.replace(onlyNumber, '0')
      e.target.value = value

      newValue[index].response = e.target.value
      newValue[index].isCorrect =
        e.target.value === String(newValue[index].value)
      setValue(newValue)
    }
  }

  useEffect(() => {
    const ifFilled = value_.every(item => !!item.response)

    if (ifFilled) {
      const response = value_.filter(item => item.isCorrect).length

      const newQuestion = {
        id: props.id,
        nota: Number((response / value_.length).toFixed(2)),
        isDone: true,
        responseUser: JSON.stringify({ response: value_ })
      }

      const find = gameState.questions.find(
        question => question.id === newQuestion.id
      )

      if (find) {
        updatedQuestion(newQuestion)
      } else {
        setQuestion(newQuestion)
      }
    } else {
      updatedQuestion({
        id: props.id,
        nota: 0,
        isDone: false,
        responseUser: undefined
      })
    }
  }, [value_])

  return { value_, handleChange, setValue, value, gameState }
}

export default useBase10Descomposition
