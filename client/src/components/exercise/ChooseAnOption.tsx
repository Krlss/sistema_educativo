import QuestionTitle from '../title/questionTitle'
import { question, chooseAnOption_ } from '../../types/game'
import { stripquotes } from '../../utils'
import Radio from '../inputs/radio'
import { useState, useEffect } from 'react'

const ChooseAnOption = (props: question) => {
  const { options, columns, urlDescription } = stripquotes(
    props.options
  ) as chooseAnOption_

  const [answer, setAnswer] = useState<string>('')
  const [correct, setCorrect] = useState<number>()

  useEffect(() => {
    if (answer) {
      setCorrect(options.find(option => option.text === answer)?.value ? 1 : 0)
    }
  }, [answer])

  console.log(correct)

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      {columns && (
        <div className="flex">
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-gray-500 font-semibold p-2 border">
                {column.title}
              </span>
              {column.data.map((item, index) => (
                <span key={index} className="p-2 border">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}
      {urlDescription && (
        <div className="flex flex-col items-center justify-center">
          <img src={urlDescription} alt="description" width={150} />
        </div>
      )}
      <form>
        <div className="flex flex-col items-start mb-6">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center">
              <Radio
                name="answer"
                value={option.text}
                onChange={e => setAnswer(e.target.value)}
              />
              <label className="ml-2">{option.text}</label>
            </div>
          ))}
        </div>
      </form>
    </>
  )
}

export default ChooseAnOption
