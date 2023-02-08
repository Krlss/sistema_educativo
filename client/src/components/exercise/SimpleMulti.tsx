import { useState, useEffect, useContext } from 'react'
import GeneralContext from '../../contexts/context'
import { question, simpleMulti_ } from '../../types/game'
import { stripquotes } from '../../utils'
import QuestionTitle from '../title/questionTitle'

const SimpleMulti = (props: question) => {
  const props_ = stripquotes(props.options) as simpleMulti_
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)

  const [answer, setAnswer] = useState<number | undefined>()

  const handleAnswer = (value: string) => {
    const v = value ? parseFloat(value) : undefined
    setAnswer(v)
  }

  useEffect(() => {
    if (answer) {
      const newQuestion = {
        id: props.id,
        nota: answer === props_.value ? 1 : 0,
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
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg">{props_.text} =</span>
        <input
          disabled={gameState.next}
          type="number"
          className={`text-right border border-gray-400 rounded px-2 py-1 mt-2 ${
            gameState.next && answer === props_.value
              ? 'bg-blue-500 text-white'
              : gameState.next && answer !== props_.value
              ? 'bg-red-500'
              : ''
          }`}
          name="answer"
          onChange={e => handleAnswer(e.target.value)}
        />
      </div>
    </>
  )
}

export default SimpleMulti
