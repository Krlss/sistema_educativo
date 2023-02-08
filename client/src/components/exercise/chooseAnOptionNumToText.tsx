import { useState, useEffect, useContext } from 'react'
import QuestionTitle from '../title/questionTitle'
import { chooseaAndOptionTextNumber_, question } from '../../types/game'
import Radio from '../inputs/radio'
import { stripquotes } from '../../utils'
import GeneralContext from '../../contexts/context'

const ChooseAnOptionNumToText = (props: question) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)

  const options = stripquotes(props.options) as chooseaAndOptionTextNumber_[]
  const [answer, setAnswer] = useState<string>('')

  useEffect(() => {
    if (answer) {
      const isCorrect = options.find(option => option.value)?.text
      const newQuestion = {
        id: props.id,
        nota: isCorrect === answer ? 1 : 0,
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
      <div className="text-left">
        <QuestionTitle
          title={props.title}
          index={props.index}
          subtitle={props.subtitle}
        />
      </div>
      <form>
        <div className="flex flex-col items-start">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center">
              <Radio
                name="answer"
                value={option.text}
                onChange={e => setAnswer(e.target.value)}
                correct={option.value}
              />
              <div className="flex items-center">
                <span className="ml-2 text-red-500">{option.number}</span>
                <span className="ml-2">{option.text}</span>
              </div>
            </div>
          ))}
        </div>
      </form>
    </>
  )
}

export default ChooseAnOptionNumToText
