import QuestionTitle from '../title/questionTitle'
import useBase10Descomposition from '../../hooks/useBase10Descomposition'
import { question } from '../../types/game'
import Icon from '../icons'
import CrossIcon from '../icons/cross'
const Base10Descomposition = (props: question) => {
  const { handleChange, value_, value, next } = useBase10Descomposition(props)
  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={value.toString()}
        index={props.index}
      />
      <div className="flex md:flex-row flex-col gap-2 mt-2 mb-10">
        {value_.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <input
              disabled={next}
              className={`border border-gray-400 rounded px-2 py-1 w-full ${
                next && item.value !== Number(item.response) && 'bg-red-100'
              }`}
              onChange={e => handleChange(e, index)}
            />
            {next && item.value !== Number(item.response) && (
              <div className="flex items-center justify-start">
                <span className="text-left">{item.value}</span>
                <Icon viewBox="18 18" className="text-red-400">
                  <CrossIcon />
                </Icon>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default Base10Descomposition
