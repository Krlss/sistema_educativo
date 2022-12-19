import usePositionalTable from '../../hooks/usePositionalTable'
import QuestionTitle from '../title/questionTitle'
import { question, positionalTable_ } from '../../types/game'
import { stripquotes } from '../../utils'

const PositionalTable = (props: question) => {
  const options_ = stripquotes(props.options) as positionalTable_[]
  const {
    handleChange,
    newTable,
    lengthOfValues,
    colors,
    tableValues,
    gameState
  } = usePositionalTable({
    question: props,
    options_
  })

  return (
    <>
      <QuestionTitle
        title={props.title}
        index={props.index}
        subtitle={props.subtitle}
      />
      <ul className="mt-2">
        {tableValues.map((option, index) => {
          const isCorrect = option.every(value => value.isCorrect)
          return (
            <li
              key={index}
              className={`list-disc ml-8 ${
                gameState.next && isCorrect
                  ? 'text-blue-600'
                  : gameState.next && !isCorrect
                  ? 'text-red-logo-stronger'
                  : ''
              }`}>
              {option.map((row, r) => (
                <span key={`${index + r}`} className="text-xl font-medium">
                  {row.original}
                </span>
              ))}
            </li>
          )
        })}
      </ul>
      <table className="mx-auto mt-3">
        <thead>
          <tr className="flex items-center">
            {newTable.map((row, index) => (
              <td
                className="py-3 border border-3 border-gray-400 w-full text-center text-2xl font-medium"
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
          {tableValues.map((option, index) => (
            <tr key={index} className="flex items-center">
              {option.map((row, r) => (
                <td className="border border-3 border-gray-400 w-full" key={r}>
                  <input
                    name={`${index}-${r}`}
                    className={`w-full focus:outline outline-3 text-center py-2 text-2xl font-medium ${
                      gameState.next && row.isCorrect
                        ? 'text-blue-600'
                        : gameState.next && !row.isCorrect
                        ? 'text-red-logo-stronger'
                        : ''
                    }`}
                    min={0}
                    disabled={gameState.next}
                    autoFocus={index === 0 && r === lengthOfValues - 1}
                    onChange={e => {
                      if (!gameState.next) handleChange(e, index, r)
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default PositionalTable
