import React, { useState, useEffect, useContext } from 'react'
import GeneralContext from '../../contexts/context'
import { question, operationSimple_ } from '../../types/game'
import { stripquotes } from '../../utils'
import QuestionTitle from '../title/questionTitle'

const data = {
  index: 1,
  title: 'Realizar mentalmente la siguiente división',
  options: {
    operation: '78 ÷ 4',
    correct: 18,
    residuo: 2
  }
} as {
  index: number
  title: string
  subtitle?: string
  options: {
    operation: string
    correct: number
    residuo?: number
  }
}

const OperationSimple = (props: question) => {
  const props_ = stripquotes(props.options) as operationSimple_

  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const [state, setState] = useState({
    correct: undefined,
    residuo: undefined
  })

  const handleAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!gameState.next) {
      const { name, value } = e.target

      const v = value ? parseInt(value) : undefined

      setState({ ...state, [name]: v })
    }
  }

  useEffect(() => {
    let nota = 0
    if (state?.correct && state?.residuo) {
      const { correct, residuo } = state

      if (residuo === props_.residuo) nota += 0.2
      if (correct === props_.correct) nota += 0.8

      const newQuestion = {
        _id: props._id,
        nota,
        isDone: true,
        responseUser: JSON.stringify({ state })
      }

      const find = gameState.questions.find(
        question => question._id === newQuestion._id
      )

      if (find) {
        updatedQuestion(newQuestion)
      } else {
        setQuestion(newQuestion)
      }
    } else if (state?.correct && !props_.residuo) {
      const newQuestion = {
        _id: props._id,
        nota: state?.correct === props_.correct ? 1 : 0,
        isDone: true,
        responseUser: JSON.stringify({ state })
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
  }, [state])

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <div className="flex md:items-center gap-2 md:flex-row flex-col w-full">
        <span className="font-semibold text-xl">{props_.operation} =</span>
        <input
          type="number"
          name="correct"
          disabled={gameState.next}
          className={`bg-white w-full max-w-[224px] p-2 text-center font-normal ${
            gameState.next && state.correct === props_.correct
              ? 'bg-blue-500 text-white'
              : gameState.next && state.correct !== props_.correct
              ? 'bg-red-500'
              : ''
          }`}
          onChange={handleAnswer}
        />
        {props_.residuo ? (
          <>
            <span className="font-semibold text-xl">Residuo =</span>
            <input
              type="number"
              name="residuo"
              disabled={gameState.next}
              className={`bg-white w-full max-w-[100px] p-2 text-center font-normal ${
                gameState.next && state.correct === props_.correct
                  ? 'bg-blue-500 text-white'
                  : gameState.next && state.correct !== props_.correct
                  ? 'bg-red-500'
                  : ''
              }`}
              onChange={handleAnswer}
            />
          </>
        ) : null}
      </div>
    </>
  )
}
export default OperationSimple
