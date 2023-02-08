import { shuffleArray, stripquotes } from '../../utils'
import React, { useState, useEffect, useContext } from 'react'
import QuestionTitle from '../title/questionTitle'
import { question, writeValueFromText_ } from '../../types/game'
import { getRamdonArrayColors } from '../../constants/colors'
import GeneralContext from '../../contexts/context'

const WriteValueFromText = (props: question) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const options_ = shuffleArray(
    stripquotes(props.options)
  ) as writeValueFromText_[]
  const [response, setResponse] = useState<writeValueFromText_[]>(
    options_.map(option => ({
      text: option.text,
      value: option.value.toLowerCase(),
      isCorrect: false,
      response: undefined
    }))
  )
  const [colors] = useState<string[]>(getRamdonArrayColors(options_.length))
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newData = [...response]
    newData[index] = {
      ...response[index],
      response: e.target.value.toLowerCase(),
      isCorrect: response[index].value === e.target.value.toLowerCase()
    }
    setResponse(newData)
  }

  useEffect(() => {
    const isCompleted = response.every(option => option.response !== undefined)

    if (isCompleted) {
      const correct = response.reduce(
        (acc, option, index) => {
          if (option.isCorrect) acc.correct++
          return {
            ...acc,
            note: Number((acc.correct / response.length).toFixed(2))
          }
        },
        { note: 0, correct: 0 }
      )
      const newQuestion = {
        id: props.id,
        nota: correct.note,
        isDone: true,
        responseUser: JSON.stringify({ response })
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
        id: props.id,
        nota: 0,
        isDone: false,
        responseUser: undefined
      })
    }
  }, [response])

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <div className="w-full mt-2">
        {response.map((item, index) => {
          const isNumber = !isNaN(Number(item.value))
          return (
            <div
              key={index}
              className="flex border border-gray-400 lg:flex-row flex-col">
              <div
                className={`p-2 text-left lg:border-r border-gray-400 flex items-center ${
                  !isNumber ? 'lg:w-4/12' : 'w-full'
                }`}
                style={{
                  backgroundColor: colors[index]
                }}>
                <p className="font-semibold break-words w-full text-center">
                  {item.text}
                </p>
              </div>
              <div className="lg:w-8/12 w-full">
                <textarea
                  disabled={gameState.next}
                  className={`p-2 w-full outline-none focus:border-0 bg-transparent h-full resize-none font-semibold bg-white ${
                    gameState.next && item.isCorrect
                      ? 'text-blue-500'
                      : gameState.next && !item.isCorrect
                      ? 'text-red-500'
                      : ''
                  }`}
                  onChange={e => {
                    if (!gameState.next) handleChange(e, index)
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default WriteValueFromText
