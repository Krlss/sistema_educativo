import QuestionTitle from '../title/questionTitle'
import { question, chooseAnOption_ } from '../../types/game'
import { stripquotes } from '../../utils'

const ChooseAnOption = (props: question) => {
  const { options, columns, urlDescription } = stripquotes(
    props.options
  ) as chooseAnOption_

  return (
    <>
      <div className="self-start">
        <QuestionTitle
          title={props.title}
          subtitle={props.subtitle}
          index={props.index}
        />
      </div>
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
              <label className="ml-2">{option.text}</label>
            </div>
          ))}
        </div>
      </form>
    </>
  )
}

export default ChooseAnOption
