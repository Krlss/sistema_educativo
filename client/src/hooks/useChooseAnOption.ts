import { useState, useEffect, useContext } from 'react'
import { chooseAnOptionType, question } from '../types/game'
import GeneralContext from '../contexts/context'

interface Props {
  question: question
  options_: chooseAnOptionType[]
}

const useChooseAnOption = ({ question, options_ }: Props) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const [answer, setAnswer] = useState<string>()

  useEffect(() => {
    if (answer) {
      const isCorrect = options_.find(option => option.text === answer)?.value
      const newQuestion = {
        _id: question._id,
        nota: isCorrect ? 1 : 0,
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
    answer,
    setAnswer
  }
}

export default useChooseAnOption
