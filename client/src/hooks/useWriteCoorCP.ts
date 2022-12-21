import React, { useState, useEffect, useContext } from 'react'
import { question, writePointsCoordinatePlane_ } from '../types/game'
import GeneralContext from '../contexts/context'
import { QUESTION } from '../types/contextGame'

import { getQuadrant } from '../utils/CartesianCoordinate'
import { AddKeyToObj } from '../utils'
import shortid from 'shortid'

const useWriteCoorCP = ({
  array,
  question
}: {
  array: writePointsCoordinatePlane_[]
  question: question
}) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const [options, setOptions] = useState<writePointsCoordinatePlane_[]>(
    AddKeyToObj(array).map(item => {
      return {
        ...item,
        key: shortid.generate()
      }
    })
  )
  const type = getQuadrant(options)

  useEffect(() => {
    const verify = options.every(item => item.isResponse)
    if (verify) {
      const correct = options.reduce(
        (acc, point, index) => {
          if (point.isCorrect) {
            acc.correct++
          }
          return {
            ...acc,
            note: Number((acc.correct / array.length).toFixed(2))
          }
        },
        {
          note: 0,
          correct: 0
        }
      )

      const newQuestion = {
        _id: question._id,
        nota: correct.note,
        isDone: true,
        responseUser: JSON.stringify({ options })
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
  }, [options])

  const handleChange = (e: string, index: number, isX: boolean) => {
    const v = e ? Number(e) : undefined

    const newPointsIndex = {
      ...options[index],
      responseX: isX ? v : options[index].responseX,
      responseY: !isX ? v : options[index].responseY
    }

    const newPoints = [...options]
    newPoints[index] = newPointsIndex
    setOptions(
      newPoints.map((e, index) => {
        return {
          ...e,
          isResponse: !!(e.responseX && e.responseY),
          isCorrect: e.x === e.responseX && e.y === e.responseY
        }
      })
    )
  }

  return {
    options,
    type,
    gameState,
    setOptions,
    handleChange
  } as {
    options: writePointsCoordinatePlane_[]
    type: 'I' | 'II' | 'III' | 'IV' | '0'
    gameState: QUESTION
    setOptions: React.Dispatch<
      React.SetStateAction<writePointsCoordinatePlane_[]>
    >
    handleChange: (e: string, index: number, isX: boolean) => void
  }
}

export default useWriteCoorCP
