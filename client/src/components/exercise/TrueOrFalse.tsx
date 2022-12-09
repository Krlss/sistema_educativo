import QuestionTitle from '../title/questionTitle'
import { question, trueOrFalse_ } from '../../types/game'
import { stripquotes } from '../../utils'
import Radio from '../inputs/radio'
import useTrueOrFalse from '../../hooks/useTrueOrFalse'
const TrueOrFalse = (props: question) => {
  const options_ = stripquotes(props.options) as trueOrFalse_
  const { setAnswer } = useTrueOrFalse({
    question: props,
    options_
  })
  return (
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
        <div className="my-8">
          <img src={options_.image} alt="imagen" width={150} />
        </div>
      )}
      <div className="flex flex-col items-start mt-2 mb-6">
        <div className="flex flex-row items-center justify-center">
          <Radio
            name="answer"
            value="true"
            onChange={e => setAnswer(e.target.value)}
          />
          <label className="ml-2">Verdadero</label>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Radio
            name="answer"
            value="false"
            onChange={e => setAnswer(e.target.value)}
          />
          <label className="ml-2">Falso</label>
        </div>
      </div>
    </form>
  )
}

export default TrueOrFalse
