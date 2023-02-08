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

  const selectedCoordinates = (x: number, y: number) => {
    const find = newCoordinates.find(
      point => point.newX === x && point.newY === y
    )
    if (find) {
      find.selected = !find.selected
      find.isCorrect = !find.selected ? false : find.value === options_.correct
    }
    setNewCoordinates([...newCoordinates])
  }

  useEffect(() => {
    const lenghtResponse = newCoordinates.filter(item => item.selected)
    if (lenghtResponse.length) {
      const lenghtCorrect = newCoordinates.filter(
        item => item.value === options_.correct
      ).length
      const veryfied = newCoordinates.reduce(
        (acc, point) => {
          if (point.selected && point.isCorrect) acc.correct++
          return {
            ...acc,
            note:
              lenghtResponse.length > lenghtCorrect
                ? 0
                : Number((acc.correct / lenghtCorrect).toFixed(2))
          }
        },
        {
          correct: 0,
          note: 0
        }
      )

      const newQuestion = {
        id: question.id,
        nota: veryfied.note,
        isDone: true,
        responseUser: JSON.stringify({ asnwer: newCoordinates })
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
        id: question.id,
        nota: 0,
        isDone: false,
        responseUser: undefined
      })
    }
  }, [newCoordinates])

  return {
    newCoordinates,
    selectedCoordinates,
    gameState
  }
}

export default useSelectPointCP
