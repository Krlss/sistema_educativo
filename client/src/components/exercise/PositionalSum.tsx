import React, { useState, useEffect, useContext } from 'react'
import { sortData, stripquotes } from '../../utils'
import QuestionTitle from '../title/questionTitle'
import { question, positionalSum_ } from '../../types/game'
import { onlyNumberWithNegative } from '../../constants/regex'
import GeneralContext from '../../contexts/context'

const PositionalSum = (props: question) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const options_ = stripquotes(props.options) as positionalSum_

  const [value] = useState(sortData(options_.value))
  const [answer, setAnswer] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onlyNumberWithNegative.test(e.target.value)) {
      e.target.value = e.target.value.replace(/[^0-9-]/g, '')
    }
    setAnswer(e.target.value)
  }

  useEffect(() => {
    if (answer) {
      const sum = value.reduce((a, b) => a + b, 0)
      const newQuestion = {
        _id: props._id,
        nota: sum === parseInt(answer) ? 1 : 0,
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

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <div className="flex flex-col mt-2 text-right">
        {value.map((value, index) => {
          return <span key={index}>{value}</span>
        })}
        <input
          type="text"
          className="text-right border border-gray-400 rounded px-2 py-1 mt-2"
          value={answer}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default PositionalSum
