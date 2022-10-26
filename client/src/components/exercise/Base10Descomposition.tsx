import QuestionTitle from '../title/questionTitle'
import useBase10Descomposition from '../../hooks/useBase10Descomposition'
const data = {
  title: 'Descomposición en base 10 de la siguiente cifra:',
  value: 28003731
}
const Base10Descomposition = () => {
  const { handleChange, value } = useBase10Descomposition(data.value)
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col">
          <QuestionTitle title={data.title} subtitle={data.value.toString()} />
          <div className="flex md:flex-row flex-col gap-2 mt-2">
            {value.map((item, index) => (
              <input
                className="border border-gray-400 rounded px-2 py-1 w-full"
                key={index}
                onChange={e => handleChange(e, index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Base10Descomposition
