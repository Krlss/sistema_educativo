import { useState, useEffect, useContext } from 'react'
import { cartesianCoordinateFull_, question } from '../types/game'
import GeneralContext from '../contexts/context'
import { AddKeyToObj } from '../utils'
import { namePoints } from '../constants/CartesianConstants'

interface CartesianCoordinate {
  x: number
  y: number
  responseX?: number
  responseY?: number
  key?: string
  isResponse?: boolean
  isCorrect?: boolean
  letter?: string
}
const useCartesianCoordinate = (
  points: cartesianCoordinateFull_[],
  question: question
) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const [cartesian, setCartesian] = useState<CartesianCoordinate[]>(
    AddKeyToObj(points).map((point, index) => ({
      ...point,
      letter: namePoints[index]
    }))
  )

  useEffect(() => {
    const isDone = cartesian.every(cartesian => cartesian.isResponse)
    if (isDone) {
      const correct = cartesian.reduce(
        (acc, point, index) => {
          if (point.isCorrect) acc.correct++
          return {
            ...acc,
            note: Number((acc.correct / cartesian.length).toFixed(2))
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
        responseUser: JSON.stringify({ cartesian })
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
  }, [cartesian])

  const updateCartesian = (x: number, y: number) => {
    const newCartesian = [...cartesian]

    // si le dió clic al mismo punto para eliminarlo
    const find = newCartesian.find(
      cartesian => cartesian.responseX === x && cartesian.responseY === y
    )

    // si le dió clic al punto correcto
    const findPoints = newCartesian.find(
      cartesian => cartesian.x === x && cartesian.y === y
    )

    if (find) {
      // si es el mismo elimina la respuesta
      const index = newCartesian.findIndex(
        cartesian => cartesian.key === find.key
      )

      newCartesian[index] = {
        ...newCartesian[index],
        isCorrect: false,
        isResponse: false,
        responseX: undefined,
        responseY: undefined
      }
    } else {
      if (findPoints) {
        const indexFindPoints = newCartesian.findIndex(
          cartesian => cartesian.key === findPoints.key
        )

        const firstIndexUndefined = newCartesian.findIndex(
          cartesian => !cartesian.isResponse
        )

        if (firstIndexUndefined !== -1) {
          newCartesian[firstIndexUndefined] = {
            ...newCartesian[firstIndexUndefined],
            isCorrect:
              newCartesian[firstIndexUndefined].x ===
                newCartesian[indexFindPoints].responseX &&
              newCartesian[firstIndexUndefined].y ===
                newCartesian[indexFindPoints].responseY,
            isResponse: !!(
              newCartesian[firstIndexUndefined].responseX &&
              newCartesian[firstIndexUndefined].responseY
            ),
            responseX: newCartesian[indexFindPoints].responseX,
            responseY: newCartesian[indexFindPoints].responseY
          }
        }

        newCartesian[indexFindPoints] = {
          ...newCartesian[indexFindPoints],
          isCorrect: true,
          isResponse: true,
          responseX: x,
          responseY: y
        }
      } else {
        // si no es el mismo, busca el que no tiene respuesta y le asigna la respuesta
        const index = newCartesian.findIndex(cartesian => !cartesian.isResponse)

        if (index !== -1) {
          newCartesian[index] = {
            ...newCartesian[index],
            isCorrect:
              x === newCartesian[index].x && y === newCartesian[index].y,
            isResponse: true,
            responseX: x,
            responseY: y
          }
        } else {
          newCartesian[newCartesian.length - 1] = {
            ...newCartesian[newCartesian.length - 1],
            isCorrect:
              x === newCartesian[newCartesian.length - 1].x &&
              y === newCartesian[newCartesian.length - 1].y,
            isResponse: true,
            responseX: x,
            responseY: y
          }
        }
      }
    }
    setCartesian(newCartesian)
  }

  return { cartesian, updateCartesian, gameState }
}

export default useCartesianCoordinate
