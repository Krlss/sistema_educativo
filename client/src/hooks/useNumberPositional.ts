import React, { useState, useEffect, useContext } from 'react'
import { onlyNumber } from '../constants/regex'
import GeneralContext from '../contexts/context'
import { question, writeNumberPositional_ } from '../types/game'
import { stripquotes } from '../utils'

const convert = (number: number) => {
  const value = []
  const numberString = number.toString()
  for (let i = 0; i < numberString.length; i++) {
    if (numberString[i] !== '0') {
      value.push({
        response: '',
        value: numberString[i],
        isCorrect: false
      })
    }
  }
  return value
}

const useNumberPositional = (props: question) => {
  const options_ = stripquotes(props.options) as writeNumberPositional_
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const [value, setValue] = useState(convert(options_.value))
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (!gameState.next) {
      const value_ = e.target.value.replace(onlyNumber, '0')
      e.target.value = value_
      if (e.target.value.length > 1) {
        e.target.value = e.target.value[e.target.value.length - 1]
      }
      const prevInput = document.querySelector(
        `input[name="${index - 1}"]`
      ) as HTMLInputElement
      if (prevInput) {
        prevInput.focus()
      }
      setValue(
        value.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              response: e.target.value,
              isCorrect: e.target.value === item.value
            }
          }
          return item
        })
      )
    }
  }

  useEffect(() => {
    const ifFilled = value.every(item => !!item.response)
    if (ifFilled) {
      const realValue = value.map(item => item.value).join('')
      const response = value.map(item => item.response).join('')
      const newQuestion = {
        id: props.id,
        nota: realValue === response ? 1 : 0,
        isDone: true,
        responseUser: JSON.stringify({ response })
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
  }, [value])

  return { value, handleChange, setValue, gameState }
}

export default useNumberPositional
