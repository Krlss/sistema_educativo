import QuestionTitle from '../title/questionTitle'
import { chooseaAndOptionTextNumber_, question } from '../../types/game'

import { stripquotes } from '../../utils'

const ChooseAnOptionNumToText = (props: question) => {
  const options = stripquotes(props.options) as chooseaAndOptionTextNumber_[]
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
              <input
                type="radio"
                name="answer"
                value={option.text}
                className="appearance-none w-4 h-4 rounded-full checked:bg-yellow-page border-2 checked:border-0 cursor-pointer bg-white"
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
