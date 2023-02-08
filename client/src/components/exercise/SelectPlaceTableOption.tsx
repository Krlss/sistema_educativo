import React, { useState, useEffect, useContext } from 'react'
import QuestionTitle from '../title/questionTitle'
import { question, selectPlaceTableOption_ } from '../../types/game'
import { stripquotes } from '../../utils'
import { getRamdonArrayColors } from '../../constants/colors'
import GeneralContext from '../../contexts/context'

const SelectPlaceTableOption = (props: question) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const options_ = stripquotes(props.options) as selectPlaceTableOption_[]
  const [colors] = useState<string[]>(getRamdonArrayColors(options_.length))

  const [selected, setSelected] = useState(options_)
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const newSelected = [...selected]
    newSelected[index].response =
      e.target.value === 'Selecciona una opción' ? undefined : e.target.value
    newSelected[index].isCorrect =
      newSelected[index].selects.find(select => select.correct)?.text ===
      e.target.value
    setSelected(newSelected)
  }

  useEffect(() => {
    const isCompleted = selected.every(option => option.response)
    if (isCompleted) {
      const correct = selected.reduce(
        (acc, option) => {
          const isCorrect = option.selects.find(select => select.correct)?.text
          if (option.response === isCorrect) {
            acc.correct++
          }
          return {
            ...acc,
            note: Number((acc.correct / selected.length).toFixed(2))
          }
        },
        { note: 0, correct: 0 }
      )
      const response = selected.map(option => ({
        text: option.text,
        response: option.response
      }))
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
  }, [selected])

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <div className="mt-2">
        {selected.map((option, index) => (
          <div
            key={index}
            className="flex items-start justify-around py-2 gap-4 w-full">
            <div
              className="flex items-center justify-start px-4 py-2 rounded shadow w-full"
              style={{
                backgroundColor: colors[index]
              }}>
              <h1 className="font-medium text-left">{option.text}</h1>
            </div>
            <select
              disabled={gameState.next}
              className={`shadow p-2 rounded ${
                gameState.next && option.isCorrect
                  ? 'text-blue-500 appearance-none'
                  : gameState.next && !option.isCorrect
                  ? 'text-red-500 appearance-none'
                  : ''
              }`}
              placeholder="Selecciona una opción"
              onChange={e => {
                if (!gameState.next) handleChange(e, index)
              }}>
              <option value={undefined}>Selecciona una opción</option>
              {option.selects.map((select, index) => (
                <option key={index} value={select.text}>
                  {select.text}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </>
  )
}

export default SelectPlaceTableOption
