import usePlaceSign from '../../hooks/usePlaceSign'
import QuestionTitle from '../title/questionTitle'
import { question, PlaceSing_ } from '../../types/game'
import { stripquotes } from '../../utils'

const PlaceSign = (props: question) => {
  const options_ = stripquotes(props.options) as PlaceSing_
  const { handleChange, option } = usePlaceSign(options_.values)

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen-calculator flex-col">
        <div className="flex flex-col items-start justify-center">
          <QuestionTitle
            title={props.title}
            subtitle={props.subtitle}
            index={props.index}
          />
          <form className="flex flex-col self-center">
            {option.map((op, index) => (
              <div
                className="flex flex-row items-center justify-center gap-2 mb-2"
                key={index}>
                {op.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center gap-2">
                    <span className="text-center">{item.text}</span>
                    {i !== op.length - 1 && (
                      <select
                        className="h-14 border-2 border-gray-300 rounded-lg appearance-none p-2"
                        onChange={e =>
                          handleChange(
                            index,
                            e.target.value,
                            op[0].value,
                            op[1].value
                          )
                        }>
                        <option className="p-2">Seleccione</option>
                        {options_.operators.map((operator, index) => (
                          <option
                            key={index}
                            className="text-center p-2"
                            value={operator}>
                            {operator}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  )
}
export default PlaceSign
