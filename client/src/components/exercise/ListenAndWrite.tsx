import React, { useState, useEffect, useContext } from 'react'
import { NumberToText } from '../../utils/ListenAndWrite'
import Icon from '../icons'
import SpeakerIcon from '../icons/speaker'
import QuestionTitle from '../title/questionTitle'
import { ListenAndWrite_, question } from '../../types/game'
import { stripquotes } from '../../utils'
import GeneralContext from '../../contexts/context'

interface Ioptions {
  text: string
  value?: string | number
  isCorrect: boolean
  response?: string
  image?: string
}

const ListenAndWrite = (props: question) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const options_ = stripquotes(props.options) as ListenAndWrite_[]
  const [options, setOptions] = useState<Ioptions[]>(
    props.type === 'listen_numbers'
      ? NumberToText({ array: options_ })
      : options_.map(item => {
          return {
            text: item.text,
            value: item.text,
            isCorrect: false,
            response: undefined,
            image: item.image
          }
        })
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target
    const newOptions = [...options]
    newOptions[index].response = value.toLowerCase()
    newOptions[index].isCorrect =
      value.toLowerCase() === options[index].text.toLowerCase()
    setOptions(newOptions)
  }

  useEffect(() => {
    const isFillAll = options.every(item => item.response !== undefined)
    if (isFillAll) {
      const correct = options.reduce(
        (acc, item, index) => {
          if (item.isCorrect) acc.correct++
          return {
            ...acc,
            note: Number((acc.correct / options.length).toFixed(2))
          }
        },
        {
          correct: 0,
          note: 0
        }
      )
      const newQuestion = {
        id: props.id,
        nota: correct.note,
        isDone: true,
        responseUser: JSON.stringify({ options })
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
  }, [options])

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
          {option.image && <img className="w-16 h-16" src={option.image} />}
          <button
            className="flex items-center justify-center"
            disabled={gameState.next}
            onClick={() => {
              const msg = new SpeechSynthesisUtterance(option.text)
              window.speechSynthesis.speak(msg)
            }}>
            <Icon
              viewBox="64 64"
              className="text-gray-600 hover:text-gray-800"
              width={50}
              height={50}>
              <SpeakerIcon />
            </Icon>
          </button>
          <input
            disabled={gameState.next}
            className={`p-2 rounded outline-none w-full ${
              gameState.next && option.isCorrect
                ? 'bg-blue-500 text-white'
                : gameState.next && !option.isCorrect
                ? 'bg-red-500'
                : ''
            }`}
            onChange={e => {
              if (!gameState.next) handleChange(e, index)
            }}
          />
        </div>
      ))}
    </>
  )
}
export default ListenAndWrite
