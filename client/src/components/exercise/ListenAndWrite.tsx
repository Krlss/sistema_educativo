import React, { useState, useEffect, useContext } from 'react'
import { NumberToText } from '../../utils/listenAndWrite'
import Icon from '../icons'
import SpeakerIcon from '../icons/speaker'
import QuestionTitle from '../title/questionTitle'
import { ListenAndWrite_, question } from '../../types/game'
import { stripquotes } from '../../utils'
import GeneralContext from '../../contexts/context'

const ListenAndWrite = (props: question) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const options_ = stripquotes(props.options) as ListenAndWrite_[]
  const [options] = useState(
    props.type === 'listen_numbers'
      ? NumberToText({ array: options_ })
      : options_
  )

  const [response, setResponse] = useState(
    Array(options.length).fill(undefined)
  )
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target
    const newOptions = [...response]
    newOptions[index] = value.toLowerCase()
    setResponse(newOptions)
  }

  useEffect(() => {
    const isFillAll = response.every(item => !!item)
    if (isFillAll) {
      const correct = options.reduce(
        (acc, item, index) => {
          if (item.text.toLowerCase() === response[index]) {
            acc.correct++
          }
          return {
            ...acc,
            note: Number((acc.correct / response.length).toFixed(2))
          }
        },
        {
          correct: 0,
          note: 0
        }
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
        index={props.index}
        subtitle={props.subtitle}
      />
      {options.map((option, index) => (
        <div
          key={index}
          className="flex items-center justify-center gap-2 my-2  w-full">
          <input
            className="border border-yellow-page p-2 rounded outline-none w-full"
            onChange={e => handleChange(e, index)}
          />
          <button
            className="flex items-center justify-center"
            onClick={() => {
              const msg = new SpeechSynthesisUtterance(option.text)
              window.speechSynthesis.speak(msg)
            }}>
            <Icon
              viewBox="64 64"
              className="text-gray-600"
              width={20}
              height={20}
              style={{
                // rotate: '90deg',
                transform: 'rotate(180deg)'
              }}>
              <SpeakerIcon />
            </Icon>
          </button>
        </div>
      ))}
    </>
  )
}
export default ListenAndWrite
