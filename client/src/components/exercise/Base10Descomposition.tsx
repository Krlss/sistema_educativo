import QuestionTitle from '../title/questionTitle'
import useBase10Descomposition from '../../hooks/useBase10Descomposition'
import { question, valueBase10Descomposition } from '../../types/game'
import { stripquotes } from '../../utils'

const Base10Descomposition = (props: question) => {
  const { value } = stripquotes(props.options) as valueBase10Descomposition
  const { handleChange, value_ } = useBase10Descomposition(value)
  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={value.toString()}
        index={props.index}
      />
      <div className="flex md:flex-row flex-col gap-2 mt-2">
        {value_.map((item, index) => (
          <input
            className="border border-gray-400 rounded px-2 py-1 w-full"
            key={index}
            onChange={e => handleChange(e, index)}
          />
        ))}
      </div>
    </>
  )
}

export default Base10Descomposition
