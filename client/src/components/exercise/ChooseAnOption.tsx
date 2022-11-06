import QuestionTitle from '../title/questionTitle'

const data = {
  id: 8,
  pregunta: '¿Cuál es el valor posicional del 8 en 2,894?',
  options: [
    { opcion: true, texto: '1547' },
    { opcion: false, texto: '586' },
    { option: false, texto: '3257' }
  ],
  columns: [
    {
      title: 'Forma expandida',
      data: ['1000 + 500 + 40 + 7', '800 + 50 + 6', '300 + 2000 + 50 + 7']
    },
    {
      title: 'Forma estándar',
      data: ['1547', '586', '3257']
    }
  ]
} as {
  id: number
  pregunta: string
  options: {
    opcion: boolean
    texto: string
  }[]
  columns: {
    title: string
    data: string[]
  }[]
}

const ChooseAnOption = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen-calculator flex-col">
        <div className="flex flex-col items-start justify-center">
          <div className="text-left">
            <QuestionTitle title="Elija la opción correcta según corresponda:" />
          </div>
          {data?.columns && (
            <div className="flex">
              {data?.columns?.map((column, index) => (
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
          <form>
            <div className="flex flex-col items-start">
              {data.options.map((opcion, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center justify-center">
                  <input
                    type="radio"
                    name="answer"
                    value={opcion.texto}
                    className="appearance-none w-4 h-4 rounded-full checked:bg-yellow-page border-2 checked:border-0 cursor-pointer"
                  />
                  <label className="ml-2">{opcion.texto}</label>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChooseAnOption
