import { useState, useEffect, useContext } from 'react'
import { trueOrFalse_, question } from '../types/game'
import GeneralContext from '../contexts/context'

interface Props {
  question: question
  options_: trueOrFalse_
}

const useTrueOrFalse = ({ question, options_ }: Props) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const [answer, setAnswer] = useState<string>()

  useEffect(() => {
    if (answer) {
      const { correct } = options_
      const newQuestion = {
        id: question.id,
        nota: String(correct) === answer ? 1 : 0,
        isDone: true,
        responseUser: JSON.stringify({ answer })
      }

      const find = gameState.questions.find(
        question => question.id === newQuestion.id
      )

      if (find) {
        updatedQuestion(newQuestion)
      } else {
        setQuestion(newQuestion)
      }
    }
  }, [answer])

  return { answer, setAnswer, options_ }
}

export default useTrueOrFalse
