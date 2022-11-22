import usePositionalTable from '../../hooks/usePositionalTable'
import QuestionTitle from '../title/questionTitle'
import { question, positionalTable_ } from '../../types/game'
import { stripquotes } from '../../utils'

const PositionalTable = (props: question) => {
  const options_ = stripquotes(props.options) as positionalTable_[]
  const { handleChange, newTable, values, lengthOfValues, colors } =
    usePositionalTable(options_)

  return (
    <>
      <div>
        <QuestionTitle
          title={props.title}
          index={props.index}
          subtitle={props.subtitle}
        />
        <ul className="mt-2">
          {options_.map((option, index) => (
            <li key={index} className="list-disc ml-8">
              <span className="text-xl font-medium">{option.value}</span>
            </li>
          ))}
        </ul>
        <table className="mx-auto mt-3">
          <thead>
            <tr className="flex items-center">
              {newTable.map((row, index) => (
                <td
                  className="py-3 border border-3 border-gray-300 w-full text-center text-2xl font-medium"
                  key={index}
                  style={{
                    backgroundColor: colors[index]
                  }}>
                  {row}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {values.map((option, index) => (
              <tr key={index} className="flex items-center">
                {newTable.map((row, r) => (
                  <td
                    className="border border-3 border-gray-300 w-full"
                    key={r}>
                    <input
                      name={`${index}-${r}`}
                      className="w-full focus:outline outline-3 text-center py-2 text-2xl"
                      min={0}
                      autoFocus={index === 0 && r === lengthOfValues - 1}
                      onChange={e => handleChange(e, index, r)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PositionalTable
