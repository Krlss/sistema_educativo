import { useContext, useEffect, useState } from 'react'
import GeneralContext from '../../contexts/context'
import { ImageWriteAnswer_, question } from '../../types/game'
import { stripquotes } from '../../utils'
import QuestionTitle from '../title/questionTitle'

const ImageWriteAnswer = (props: question) => {
  const { correct, image } = stripquotes(props.options) as ImageWriteAnswer_
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    if (!!answer) {
      const newQuestion = {
        id: props.id,
        nota: answer === correct ? 1 : 0,
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
      <div className="flex flex-col">
        <div className="my-8">
          <img src={image} alt="description" width={150} />
        </div>
        <div>
          <span>Tu respuesta:</span>
          <input
            className="max-w-[12rem] w-full border-2 rounded-md px-2 py-1 ml-4"
            autoFocus
            onChange={e => setAnswer(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}

export default ImageWriteAnswer
