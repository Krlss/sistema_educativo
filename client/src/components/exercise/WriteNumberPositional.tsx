import QuestionTitle from '../title/questionTitle'
import useNumberPositional from '../../hooks/useNumberPositional'
import { NamePositional } from '../../constants/PositionalTable'

const data = {
  title:
    'Observo la siguiente cifra y realizo su valor posicional según su lectura en la tabla posicional.',
  subtitle: 'Valor posicional de 35 002 642:',
  value: 35002642
}
const WriteNumberPositional = () => {
  const { handleChange, value } = useNumberPositional(data.value)
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col">
          <QuestionTitle title={data.title} subtitle={data.subtitle} />
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
