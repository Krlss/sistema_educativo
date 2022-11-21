import QuestionTitle from '../title/questionTitle'
import useNumberPositional from '../../hooks/useNumberPositional'
import { NamePositional } from '../../constants/PositionalTable'
import { question, writeNumberPositional_ } from '../../types/game'
import { stripquotes } from '../../utils'

const WriteNumberPositional = (props: question) => {
  const options_ = stripquotes(props.options) as writeNumberPositional_
  const { handleChange, value } = useNumberPositional(options_.value)
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col">
          <QuestionTitle
            title={props.title}
            subtitle={props.subtitle}
            index={props.index}
          />
          <div className="flex md:flex-row flex-col gap-2 mt-2 items-center">
            {value.map((item, index) => (
              <div key={index}>
                <span>{NamePositional[value.length - (index + 1)]}</span>
                <input
                  className="border border-gray-400 rounded px-2 py-1 w-14 text-center ml-2"
                  name={`${index}`}
                  autoFocus={index === value.length - 1}
                  onChange={e => handleChange(e, index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WriteNumberPositional
