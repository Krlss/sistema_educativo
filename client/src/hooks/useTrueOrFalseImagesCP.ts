import { useState, useEffect, useContext } from 'react'
import { question, trueOrFalseCartesianCoordObjects_ } from '../types/game'
import { changePoints, getQuadrant } from '../utils/CartesianCoordinate'
import { stripquotes } from '../utils'
import { typeCartesian, ReturnChangePoint } from '../types/CartesianCoordinate'
import GeneralContext from '../contexts/context'

const useTrueOrFalseImagesCP = (props: question) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)

  const options_ = stripquotes(
    props.options
  ) as trueOrFalseCartesianCoordObjects_
  const type = getQuadrant(options_.points)
  const [answer, setAnswer] = useState<string>()

  const [newData] = useState(
    changePoints({
      correct: options_.correct,
      points: options_.points,
      type,
      length: 10
    })
  )

  useEffect(() => {
    if (answer) {
      const { correct } = options_
      const newQuestion = {
        _id: props._id,
        nota: String(correct) === answer ? 1 : 0,
        isDone: true,
        responseUser: JSON.stringify({ answer })
      }

      const find = gameState.questions.find(
        question => question._id === newQuestion._id
      )

      if (find) {
        updatedQuestion(newQuestion)
      } else {
        setQuestion(newQuestion)
      }
    }
  }, [answer])

  return {
    newData,
    type,
    options_,
    setAnswer,
    answer
  } as {
    newData: ReturnChangePoint[]
    type: typeCartesian
    options_: trueOrFalseCartesianCoordObjects_
    setAnswer: (answer: string) => void
    answer?: string
  }
}
export default useTrueOrFalseImagesCP
