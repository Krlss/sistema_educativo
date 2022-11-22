import QuestionTitle from '../title/questionTitle'
import { question, trueOrFalse_ } from '../../types/game'
import { stripquotes } from '../../utils'

const TrueOrFalse = (props: question) => {
  const options_ = stripquotes(props.options) as trueOrFalse_
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-start justify-center">
        <form>
          <QuestionTitle
            title={props.title}
            subtitle={props.subtitle}
            index={props.index}
          />

          {options_?.columns && (
            <div className="flex">
              {options_?.columns?.map((column, index) => (
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
          {options_.image && (
            <div className="flex items-center justify-center">
              <img src={options_.image} alt="imagen" width={150} />
            </div>
          )}
          <div className="flex flex-col items-start mt-2">
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
      </div>
    </div>
  )
}

export default TrueOrFalse
