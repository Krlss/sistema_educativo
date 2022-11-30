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
  const [data] = useState<writeValueFromText_[]>(options_)
  const [response, setResponse] = useState<string[]>(
    Array(options_.length).fill(undefined)
  )
  const [colors] = useState<string[]>(getRamdonArrayColors(options_.length))
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newData = [...response]
    newData[index] = e.target.value.toLowerCase()
    setResponse(newData)
  }

  useEffect(() => {
    const isCompleted = response.every(option => option)

    if (isCompleted) {
      const correct = data.reduce(
        (acc, option, index) => {
          if (response[index] === (option?.value).toLocaleLowerCase()) {
            acc.correct++
          }
          return {
            ...acc,
            note: Number((acc.correct / data.length).toFixed(2))
          }
        },
        { note: 0, correct: 0 }
      )
      const newQuestion = {
        _id: props._id,
        nota: correct.note,
        isDone: true,
        responseUser: JSON.stringify({ response })
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
        _id: props._id,
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
        {data.map((item, index) => {
          const isNumber = !isNaN(Number(item.value))
          return (
            <div
              key={index}
              className="flex border border-gray-300 lg:flex-row flex-col">
              <div
                className={`p-2 text-left lg:border-r border-gray-300 flex items-center ${
                  !isNumber ? 'lg:w-4/12' : 'w-full'
                }`}
                style={{
                  backgroundColor: colors[index]
                }}>
                <p className="font-semibold break-words w-full text-center">
                  {item.text}
                </p>
              </div>
              <div className="w-8/12">
                <textarea
                  className="p-2 w-full outline-none focus:border-0 bg-transparent h-full resize-none bg-white"
                  onChange={e => handleChange(e, index)}
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
