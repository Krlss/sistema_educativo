import React, { useState, useEffect, useContext } from 'react'
import GeneralContext from '../../contexts/context'
import { question, operationBaseN_ } from '../../types/game'
import { stripquotes } from '../../utils'
import QuestionTitle from '../title/questionTitle'

interface IState {
  base: number
  digit: number
  value: number
  isCorrect: boolean
  response: number | undefined
}

const OperationBaseN = (props: question) => {
  const props_ = stripquotes(props.options) as operationBaseN_
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const [state, setState] = useState<IState[][]>(
    props_.base.map((base, bi) => {
      return props_.digits.map((digit, di) => {
        return {
          base,
          digit,
          value: base * digit,
          isCorrect: false,
          response: undefined
        }
      })
    })
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!gameState.next) {
      const { name, value } = e.target
      const [base, digit] = name.split(',').map(item => {
        return item.split('-')[1]
      })
      setState(prevState => {
        return prevState.map(baseItem => {
          return baseItem.map(digitItem => {
            if (
              digitItem.base === parseInt(base) &&
              digitItem.digit === parseInt(digit)
            ) {
              return {
                ...digitItem,
                isCorrect: digitItem.value === parseInt(value),
                response: value ? parseInt(value) : undefined
              }
            }
            return digitItem
          })
        })
      })
    }
  }

  useEffect(() => {
    const allDefined = state.every(baseItem => {
      return baseItem.every(digitItem => {
        return digitItem.response !== undefined
      })
    })

    if (allDefined) {
      const lengthInputs = props_.base.length * props_.digits.length
      const lengthCorrect = state.reduce((acc, baseItem) => {
        return (
          acc +
          baseItem.reduce((acc, digitItem) => {
            return acc + (digitItem.isCorrect ? 1 : 0)
          }, 0)
        )
      }, 0)

      const newQuestion = {
        _id: props._id,
        nota: lengthCorrect / lengthInputs,
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
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <br />
          {props_.digits.map((digit, index) => {
            return (
              <div
                key={index}
                className="p-1.5 font-semibold text-lg text-right">
                {digit}
              </div>
            )
          })}
        </div>
        {props_.base.map((base, bi) => {
          return (
            <div
              key={bi}
              className="flex flex-col gap-2 text-center font-semibold">
              x{base}
              {props_.digits.map((digit, di) => {
                return (
                  <input
                    key={di}
                    type="number"
                    name={`base-${base},digit-${digit}`}
                    onChange={handleChange}
                    disabled={gameState.next}
                    className="bg-gray-100 w-full max-w-[224px] p-2 text-center font-normal"
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default OperationBaseN
