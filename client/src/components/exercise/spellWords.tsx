import { useState, useEffect, useContext } from 'react'
import GeneralContext from '../../contexts/context'
import { question } from '../../types/game'
import { stripquotes } from '../../utils'
import QuestionTitle from '../title/questionTitle'

const SpellWords = (props: question) => {
  const options_ = stripquotes(props.options) as {
    image: string
    options: { text: string; value: string[]; image?: string }[]
  }
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)

  const [options, setOptions] = useState<
    {
      text: string
      value: string[]
      image?: string
      response: Array<string | undefined>
    }[]
  >(
    options_.options.map(item => ({
      ...item,
      response: Array(item.value.length).fill(undefined)
    }))
  )

  useEffect(() => {
    const isFillAll = options.every(item => item.response.every(r => !!r))
    if (isFillAll) {
      const correct = options.reduce(
        (acc, item, index) => {
          if (item.response.join('') === item.value.join('')) acc.correct++
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
      {options_.image && (
        <div className="flex items-center justify-center mb-10">
          <img
            src={options_.image}
            alt="image"
            className="w-full lg:max-w-[50%] object-contain"
          />
        </div>
      )}

      {options.map((option, x) => (
        <div key={x} className="flex items-center gap-2 my-2 w-full">
          {option.image && <img className="w-36 h-36" src={option.image} />}
          <div className="flex gap-2">
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-2xl">{option.text}</span>
              <span className="text-2xl">=</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {option.value.map((value, y) => (
                <input
                  key={y}
                  className={`w-20 px-2 py-1 border-2 border-gray-300 rounded-md focus:outline-none ${
                    option.response[y] === value && gameState.next
                      ? 'border-green-500 cursor-default'
                      : option.response[y] !== undefined && gameState.next
                      ? 'border-red-500 cursor-default'
                      : 'focus:border-blue-500'
                  }`}
                  type="text"
                  disabled={gameState.next}
                  onChange={e => {
                    const newOptions = [...options]
                    newOptions[x].response[y] = e.target.value
                    setOptions(newOptions)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default SpellWords
