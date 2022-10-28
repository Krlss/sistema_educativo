import usePlaceSign from '../../hooks/usePlaceSign'
import QuestionTitle from '../title/questionTitle'

const data = {
  title: 'Coloca los signos > ; < o = en cada caja',
  operators: ['>', '<', '='],
  options: [
    [
      { value: 524260, text: '524 260' },
      { value: 854125, text: '854 125' }
    ],
    [
      { value: 658014, text: '658 014' },
      { value: 658010, text: '658 010' }
    ],
    [
      { value: 417520, text: '417 520' },
      { value: 417250, text: '417 250' }
    ]
  ]
}
const PlaceSign = () => {
  const { handleChange, option } = usePlaceSign(data.options)

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen-calculator flex-col">
        <div className="flex flex-col items-start justify-center">
          <QuestionTitle title={data.title} />
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
                        {data.operators.map((operator, index) => (
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
