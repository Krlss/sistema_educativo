import React, { useState, useEffect, useContext } from 'react'
import { getLengthOfValues } from '../utils/positionalTable'
import { table } from '../constants/positionalTable'
import { onlyNumber } from '../constants/regex'
import { getRamdonArrayColors } from '../constants/colors'
import GeneralContext from '../contexts/context'
import { question } from '../types/game'

interface IPositionalTable {
  value: string
  response: string[]
}

interface TableValues {
  original: string
  response?: string
  isCorrect: boolean
}

const usePositionalTable = ({
  options_,
  question
}: {
  options_: IPositionalTable[]
  question: question
}) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const lengthOfValues = getLengthOfValues({ options: options_ })
  let newTable = table.slice(0, 6).reverse()

  if (lengthOfValues > 6) {
    newTable = table.slice(0, lengthOfValues).reverse()
  }

  const [values] = useState(options_)
  const [colors, setColors] = useState<string[]>([])
  const [tableValues, setTableValues] = useState<TableValues[][]>(
    values.map((row, i) => {
      return Array.from(row.value).map((_, j) => {
        return {
          original: values[i].value[j],
          response: undefined,
          isCorrect: false
        }
      })
    })
  )

  useEffect(() => {
    setColors(getRamdonArrayColors(lengthOfValues))
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    row: number
  ) => {
    const value = e.target.value.replace(onlyNumber, '0')
    e.target.value = value

    if (e.target.value.length > 1) {
      e.target.value = e.target.value[e.target.value.length - 1]
    }

    const toIndex = row === 0 ? index + 1 : index
    const toRow = row === 0 ? lengthOfValues - 1 : row - 1

    const prevInput = document.querySelector(
      `input[name="${toIndex}-${toRow}"]`
    ) as HTMLInputElement
    if (prevInput) {
      prevInput.focus()
    }

    const newValues = tableValues.map((item, i) => {
      if (i === index) {
        return item.map((value, j) => {
          if (j === row) {
            return {
              ...value,
              response: e.target.value,
              isCorrect: e.target.value === value.original
            }
          }
          return value
        })
      }
      return item
    })

    setTableValues(newValues)
  }

  useEffect(() => {
    const isAllFilled = tableValues.every(item => {
      return item.every(value => value.response !== undefined)
    })
    if (isAllFilled) {
      const correct = tableValues.reduce(
        (acc, value, i) => {
          if (value.every(value => value.isCorrect)) acc.correct++
          return {
            ...acc,
            note: Number((acc.correct / tableValues.length).toFixed(2))
          }
        },
        {
          correct: 0,
          note: 0
        }
      )

      const newQuestion = {
        _id: question._id,
        nota: correct.note,
        isDone: true,
        responseUser: JSON.stringify({ tableValues })
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
        _id: question._id,
        nota: 0,
        isDone: false,
        responseUser: undefined
      })
    }
  }, [tableValues])

  return {
    values,
    newTable,
    handleChange,
    lengthOfValues,
    colors,
    tableValues,
    gameState
  }
}

export default usePositionalTable
