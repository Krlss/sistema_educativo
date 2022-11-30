import QuestionTitle from '../title/questionTitle'
import useNumberPositional from '../../hooks/useNumberPositional'
import { NamePositional } from '../../constants/positionalTable'
import { question } from '../../types/game'

const WriteNumberPositional = (props: question) => {
  const { handleChange, value } = useNumberPositional(props)
  return (
    <>
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
    </>
  )
}

export default WriteNumberPositional
