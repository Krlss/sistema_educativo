import QuestionTitle from '../title/questionTitle'
import Icon from '../icons'
import DashLg from '../icons/dash-lg'
import { stripquotes } from '../../utils'
import { useState, useEffect, useContext } from 'react'
import GeneralContext from '../../contexts/context'
import { question, fraction_ } from '../../types/game'

const Fraction = (props: question) => {
  const { numerator, denominator, correctDenominator, correctNumerator } =
    stripquotes(props.options) as fraction_
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)

  const [answer, setAnswer] = useState<{
    numerator?: number
    denominator?: number
  }>({
    numerator: undefined,
    denominator: undefined
  })

  useEffect(() => {
    if (answer.numerator && answer.denominator) {
      const newQuestion = {
        id: props.id,
        nota:
          answer.numerator === correctNumerator &&
          answer.denominator === correctDenominator
            ? 1
            : 0,
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
            className="-mb-4 w-12 border rounded-md px-2 py-1"
            autoFocus
            type="number"
            onChange={e => {
              setAnswer({
                ...answer,
                numerator: Number(e.target.value)
                  ? Number(e.target.value)
                  : undefined
              })
            }}
          />
          <Icon viewBox="16 16" width={50} height={50}>
            <DashLg />
          </Icon>
          <input
            className="-mt-4 w-12 border rounded-md px-2 py-1"
            type="number"
            onChange={e => {
              setAnswer({
                ...answer,
                denominator: Number(e.target.value)
                  ? Number(e.target.value)
                  : undefined
              })
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Fraction
