import { question, trueOrFalseNumbersAndText_ } from '../types/game'
import { stripquotes } from '../utils'
import { useState, useEffect, useContext } from 'react'
import GeneralContext from '../contexts/context'

const useTrueOrFalseNumbersAndText = ({ question }: { question: question }) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const options_ = stripquotes(question.options) as trueOrFalseNumbersAndText_
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

  return {
    options_,
    setAnswer,
    answer
  }
}

export default useTrueOrFalseNumbersAndText
