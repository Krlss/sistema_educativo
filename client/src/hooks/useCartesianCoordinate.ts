import { useState, useEffect, useContext } from 'react'
import { cartesianCoordinateFull_, question } from '../types/game'
import GeneralContext from '../contexts/context'

interface CartesianCoordinate {
  x: number
  y: number
}
const useCartesianCoordinate = (
  numbersCoordinate: number,
  points: cartesianCoordinateFull_[],
  question: question
) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const [cartesian, setCartesian] = useState<CartesianCoordinate[]>([])

  useEffect(() => {
    if (cartesian.length === numbersCoordinate) {
      const correct = points.reduce(
        (acc, point, index) => {
          const isCorrect = cartesian.find(
            cartesian => cartesian.x === point.x && cartesian.y === point.y
          )
          if (isCorrect) {
            acc.correct++
          }
          return {
            ...acc,
            note: Number((acc.correct / numbersCoordinate).toFixed(2))
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
    const index = newCartesian.findIndex(item => item.x === x && item.y === y)
    if (index !== -1) {
      newCartesian.splice(index, 1)
    } else {
      if (newCartesian.length === numbersCoordinate) newCartesian.pop()
      newCartesian.push({ x, y })
    }
    setCartesian(newCartesian)
  }

  return { cartesian, updateCartesian }
}

export default useCartesianCoordinate
