import QuestionTitle from '../title/questionTitle'
import { question, chooseAnOption_ } from '../../types/game'
import { stripquotes } from '../../utils'
import useChooseAnyOption from '../../hooks/useChooseAnyOption'

const ChooseAnOption = (props: question) => {
  const { options, columns, urlDescription } = stripquotes(
    props.options
  ) as chooseAnOption_

  const { handleAnswer } = useChooseAnyOption({
    options_: options,
    question: props
  })

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
        <div className="my-8">
          <img src={urlDescription} alt="description" width={150} />
        </div>
      )}
      <form>
        <div className="flex flex-col items-start mb-6">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-start">
              <input
                type="checkbox"
                name="answer"
                value={option.text}
                className="appearance-none w-4 h-4 rounded checked:bg-yellow-page border-2 checked:border-0 cursor-pointer bg-white"
                onChange={e => handleAnswer(option)}
              />
              {option?.image && (
                <img
                  src={option.image}
                  alt="option"
                  width={50}
                  className="ml-2 my-4"
                />
              )}
              {!option?.image && <label className="ml-2">{option.text}</label>}
            </div>
          ))}
        </div>
      </form>
    </>
  )
}

export default ChooseAnOption
