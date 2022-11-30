import QuestionTitle from '../title/questionTitle'
import { question } from '../../types/game'
import useTrueOrFalseNumbersAndText from '../../hooks/useTrueOrFalseNumbersAndText'
import Radio from '../inputs/radio'
const TrueOrFalseNumbersAndText = (props: question) => {
  const { options_, setAnswer } = useTrueOrFalseNumbersAndText({
    question: props
  })
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
    </>
  )
}

export default TrueOrFalseNumbersAndText
