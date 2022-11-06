import QuestionTitle from '../title/questionTitle'

const data = {
  title: 'Elija la opción correcta: Verdadero o falso',
  subtitle:
    '1. ¿El nombre que recibe el eje vertical es eje Y o de coordenadas?',
  options: {
    correct: false,
    columns: [
      {
        title: 'Forma expandida',
        data: ['7000 + 500 + 20 + 1', '800 + 50 + 6', '3000 + 200 + 50 + 7']
      },
      {
        title: 'Forma estándar',
        data: ['7521', '586', '3257']
      }
    ]
  }
}

const TrueOrFalse = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen-calculator flex-col">
        <div className="flex flex-col items-start justify-center px-4">
          <form>
            <QuestionTitle title={data.title} subtitle={data.subtitle} />

            {data.options?.columns && (
              <div className="flex">
                {data.options?.columns?.map((column, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-gray-500 font-semibold p-2 border">
                      {column.title}
                    </span>
                    {column.data.map((item, index) => (
                      <span key={index} className="p-2 border">
                        {item}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-col items-start mt-2">
              <div className="flex flex-row items-center justify-center">
                <input
                  type="radio"
                  name="answer"
                  value="true"
                  className="appearance-none w-4 h-4 rounded-full checked:bg-yellow-page border-2 checked:border-0 cursor-pointer"
                />
                <label className="ml-2">Verdadero</label>
              </div>
              <div className="flex flex-row items-center justify-center">
                <input
                  type="radio"
                  name="answer"
                  value="false"
                  className="appearance-none w-4 h-4 rounded-full checked:bg-yellow-page border-2 checked:border-0 cursor-pointer"
                />
                <label className="ml-2">Falso</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TrueOrFalse
