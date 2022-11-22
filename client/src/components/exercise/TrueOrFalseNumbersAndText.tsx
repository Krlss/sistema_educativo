import QuestionTitle from '../title/questionTitle'
import { question, trueOrFalseNumbersAndText_ } from '../../types/game'
import { stripquotes } from '../../utils'

const TrueOrFalseNumbersAndText = (props: question) => {
  const options_ = stripquotes(props.options) as trueOrFalseNumbersAndText_
  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <form>
        <div className="flex flex-col items-start mt-2 mb-10">
          <div>
            {options_.options.map((option, index) => {
              return (
                <div
                  className="flex items-center border px-4 py-2 gap-2 rounded-md mb-2"
                  key={index}>
                  <div className="border-r">{option.name}</div>
                  <div>
                    <span>
                      <span className="text-red-500 font-bold">
                        {option.value}{' '}
                      </span>
                      {option.text}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-row items-center justify-center">
            <input
              type="radio"
              name="answer"
              value="true"
              className="appearance-none w-4 h-4 rounded-full checked:bg-yellow-page border-2 checked:border-0 cursor-pointer bg-white"
            />
            <label className="ml-2">Verdadero</label>
          </div>
          <div className="flex flex-row items-center justify-center">
            <input
              type="radio"
              name="answer"
              value="false"
              className="appearance-none w-4 h-4 rounded-full checked:bg-yellow-page border-2 checked:border-0 cursor-pointer bg-white"
            />
            <label className="ml-2">Falso</label>
          </div>
        </div>
      </form>
    </>
  )
}

export default TrueOrFalseNumbersAndText
