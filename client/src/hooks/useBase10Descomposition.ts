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
    const newValue = [...value_]

    const value = e.target.value.replace(onlyNumber, '0')
    e.target.value = value

    newValue[index].response = e.target.value
    setValue(newValue)
  }

  useEffect(() => {
    const ifFilled = value_.every(item => !!item.response)

    if (ifFilled) {
      const value = value_.map(item => String(item.value))
      const response = value_.map(item => item.response)
      const isCorrect = value.every((item, index) => item === response[index])

      const newQuestion = {
        _id: props._id,
        nota: isCorrect ? 1 : 0,
        isDone: true,
        responseUser: JSON.stringify({ response })
      }

      const find = gameState.questions.find(
        question => question._id === newQuestion._id
      )

      if (find) {
        updatedQuestion(newQuestion)
      } else {
        setQuestion(newQuestion)
      }
    } else {
      updatedQuestion({
        _id: props._id,
        nota: 0,
        isDone: false,
        responseUser: undefined
      })
    }
  }, [value_])

  return { value_, handleChange, setValue, value }
}

export default useBase10Descomposition
