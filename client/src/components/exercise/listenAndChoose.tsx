import { useContext, useState, useEffect } from 'react'
import GeneralContext from '../../contexts/context'
import { question } from '../../types/game'
import { stripquotes } from '../../utils'
import Icon from '../icons'
import SpeakerIcon from '../icons/speaker'
import QuestionTitle from '../title/questionTitle'

const ListenAndChoose = (props: question) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const options_ = stripquotes(props.options) as {
    value: string
    options: {
      image?: string
      value: boolean
      select?: boolean
      text?: string
    }[]
  }
  const [options, setOptions] = useState(options_.options)

  useEffect(() => {
    const isSelect = options.some(item => item.select)
    if (isSelect) {
      const select = options.find(item => item.select)

      const newQuestion = {
        id: props.id,
        nota: select?.value ? 1 : 0,
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

      <div>
        <button
          className="flex items-center justify-center"
          disabled={gameState.next}
          onClick={() => {
            const msg = new SpeechSynthesisUtterance(options_.value)
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
        <div className="flex items-center flex-wrap gap-2 my-2 w-full mt-4">
          {options.map((x, index) => (
            <button
              className={`${x?.select ? 'cursor-default' : ''}`}
              onClick={() => {
                if (!gameState.next && !x.select) {
                  const newOptions = options.map((y, i) => {
                    return { ...y, select: i === index }
                  })
                  setOptions(newOptions)
                }
              }}>
              {x.image ? (
                <img
                  key={index}
                  src={x.image}
                  width={150}
                  height={150}
                  className={`border-2 border-gray-300 rounded-md hover:border-blue-600 bg-white shadow-md ${
                    gameState.next && !x.value && x.select
                      ? 'border-red-600'
                      : x?.select
                      ? 'border-blue-600'
                      : 'cursor-pointer'
                  }`}
                />
              ) : (
                <p
                  className={`border-[3px] border-gray-300 text-lg rounded-md hover:border-blue-600 bg-white shadow-md px-5 py-2 ${
                    gameState.next && !x.value && x.select
                      ? 'border-red-600'
                      : x?.select
                      ? 'border-blue-600'
                      : 'cursor-pointer'
                  }`}>
                  {x.text}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default ListenAndChoose
