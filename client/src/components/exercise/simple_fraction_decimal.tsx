import QuestionTitle from '../title/questionTitle'
import Icon from '../icons'
import DashLg from '../icons/dash-lg'
import { stripquotes } from '../../utils'
import { useState, useEffect, useContext } from 'react'
import GeneralContext from '../../contexts/context'
import { question, fraction_decimal } from '../../types/game'

const FractionDecimal = (props: question) => {
  const { numerator, denominator, value } = stripquotes(
    props.options
  ) as fraction_decimal
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)

  const [answer, setAnswer] = useState<{
    value?: number
  }>({
    value: undefined
  })

  useEffect(() => {
    if (answer.value) {
      const newQuestion = {
        id: props.id,
        nota: answer.value === value ? 1 : 0,
        isDone: true,
        responseUser: JSON.stringify({ answer })
      }

      const find = gameState.questions.find(
        question => question.id === newQuestion.id
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
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <span className="-mb-4">{numerator}</span>
          <Icon viewBox="16 16" width={50} height={50}>
            <DashLg />
          </Icon>
          <span className="-mt-4">{denominator}</span>
        </div>
        <span className="text-2xl">=</span>
        <div className="flex flex-col items-center">
          <input
            className="max-w-sm w-full border rounded-md px-2 py-1 ml-4"
            autoFocus
            type="number"
            onChange={e => {
              setAnswer({
                value: Number(e.target.value)
              })
            }}
          />
        </div>
      </div>
    </>
  )
}

export default FractionDecimal
