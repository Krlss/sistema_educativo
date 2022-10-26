import usePositionalTable from '../../hooks/usePositionalTable'
import QuestionTitle from '../title/questionTitle'

const PositionalTable = ({
  data
}: {
  data: {
    title: string
    options: {
      value: string
      response: string[]
    }[]
  }
}) => {
  const { handleChange, newTable, values, lengthOfValues } = usePositionalTable(
    data.options
  )

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center h-screen-calculator justify-center flex-col">
          <div>
            <QuestionTitle title={data.title} />
            <ul>
              {data.options.map((option, index) => (
                <li key={index} className="list-disc ml-8">
                  <span className="text-2xl font-medium">{option.value}</span>
                </li>
              ))}
            </ul>
            <table className="mx-auto mt-3">
              <thead>
                <tr className="flex items-center">
                  {newTable.map((row, index) => (
                    <td
                      className="py-3 border border-gray-300 w-full text-center bg-gray-200 text-2xl font-medium"
                      key={index}>
                      {row}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {values.map((option, index) => (
                  <tr key={index} className="flex items-center">
                    {newTable.map((row, r) => (
                      <td className="border border-gray-300 w-full" key={r}>
                        <input
                          name={`${index}-${r}`}
                          className="w-full outline-red-600 focus:outline outline-3 caret-red-600 text-center py-2 text-2xl"
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
        </div>
      </div>
    </div>
  )
}

export default PositionalTable
