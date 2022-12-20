import { useState, useEffect, useContext } from 'react'
import { chooseAnOptionType, question } from '../types/game'
import GeneralContext from '../contexts/context'

interface Props {
  question: question
  options_: chooseAnOptionType[]
}

const useChooseAnyOption = ({ question, options_ }: Props) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const [answer, setAnswer] = useState<chooseAnOptionType[]>([])

  useEffect(() => {
    if (answer.length) {
      const isWrong = answer.some(option => option.value === false)
      const optionsTrue = options_.filter(
        option => option.value === true
      ).length
      const answerTrue = answer.filter(option => option.value === true).length

      const newQuestion = {
        _id: question._id,
        nota: isWrong ? 0 : answerTrue / optionsTrue,
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
    } else {
      updatedQuestion({
        _id: question._id,
        nota: 0,
        isDone: false,
        responseUser: undefined
      })
    }
  }, [answer])

  const handleAnswer = (option: chooseAnOptionType) => {
    if (!gameState.next) {
      const find = answer.find(item => item.text === option.text)

      if (find) {
        const newAnswer = answer.filter(item => item.text !== option.text)
        setAnswer(newAnswer)
      } else {
        option.isCorrect = options_.find(
          item => item.text === option.text
        )?.value
        setAnswer([...answer, option])
      }
    }
  }

  return {
    answer,
    setAnswer,
    handleAnswer,
    gameState
  }
}

export default useChooseAnyOption
