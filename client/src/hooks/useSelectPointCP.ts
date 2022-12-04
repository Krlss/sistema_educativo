import { useState, useEffect, useContext } from 'react'
import { changePoints } from '../utils/CartesianCoordinate'
import { question, selectPointsCoordinatePlane_ } from '../types/game'
import GeneralContext from '../contexts/context'

const useSelectPointCP = ({
  options_,
  question
}: {
  options_: selectPointsCoordinatePlane_
  question: question
}) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const [newCoordinates, setNewCoordinates] = useState(changePoints(options_))
  const [lenght] = useState(
    newCoordinates.filter(item => item.value === options_.correct).length
  )

  const selectedCoordinates = (x: number, y: number) => {
    const selected = newCoordinates.find(
      point => point.x === x && point.y === y
    )
    if (selected) {
      selected.selected = !selected.selected
    }
    setNewCoordinates([...newCoordinates])
  }

  useEffect(() => {
    const lenghtResponse = newCoordinates.filter(item => item.selected)
    if (lenghtResponse.length) {
      const veryfied = newCoordinates.reduce(
        (acc, point) => {
          if (point.selected && point.value === options_.correct) {
            acc.correct++
          }
          return {
            ...acc,
            note:
              lenghtResponse.length > lenght
                ? 0
                : Number((acc.correct / lenght).toFixed(2))
          }
        },
        {
          correct: 0,
          note: 0
        }
      )

      const newQuestion = {
        _id: question._id,
        nota: veryfied.note,
        isDone: true,
        responseUser: JSON.stringify({ asnwer: lenghtResponse })
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
  }, [newCoordinates])

  return {
    newCoordinates,
    selectedCoordinates
  }
}

export default useSelectPointCP
