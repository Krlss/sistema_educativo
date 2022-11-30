import React, { useState, useEffect, useContext } from 'react'
import { question, writePointsCoordinatePlane_ } from '../types/game'
import GeneralContext from '../contexts/context'

import { getQuadrant } from '../utils/cartesianCoordinate'
import { AddKeyToObj } from '../utils'

const useWriteCoorCP = ({
  array,
  question
}: {
  array: writePointsCoordinatePlane_[]
  question: question
}) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const [options] = useState<writePointsCoordinatePlane_[]>(AddKeyToObj(array))
  const type = getQuadrant(options)
  const [response, setResponse] = useState<writePointsCoordinatePlane_[]>(
    Array(array.length).fill({
      x: undefined,
      y: undefined,
      key: undefined
    })
  )

  useEffect(() => {
    const verify = response.some(
      item => item.x === undefined || item.y === undefined
    )
    if (!verify) {
      const correct = options.reduce(
        (acc, point, index) => {
          const isCorrect =
            response.find(item => item.key === point.key)?.x === point.x &&
            response.find(item => item.key === point.key)?.y === point.y

          if (isCorrect) {
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

      console.log(correct)
    } else {
      updatedQuestion({
        _id: question._id,
        nota: 0,
        isDone: false,
        responseUser: undefined
      })
    }
  }, [response])

  return {
    response,
    setResponse,
    options,
    type
  } as {
    response: writePointsCoordinatePlane_[]
    setResponse: React.Dispatch<
      React.SetStateAction<writePointsCoordinatePlane_[]>
    >
    options: writePointsCoordinatePlane_[]
    type: 'I' | 'II' | 'III' | 'IV' | '0'
  }
}

export default useWriteCoorCP
