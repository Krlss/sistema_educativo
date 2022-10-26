import QuestionTitle from '../title/questionTitle'

const data = {
  id: 8,
  pregunta: '¿Cuál es el valor posicional del 8 en 2,894?',
  opciones: [
    {
      opcion: false,
      texto: 'Unidades'
    },
    {
      opcion: false,
      texto: 'Decenas'
    },
    {
      opcion: true,
      texto: 'Centenas'
    },
    {
      opcion: false,
      texto: 'Millares'
    }
  ]
}

const ChooseAnOption = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen-calculator flex-col">
        <div className="flex flex-col items-start justify-center">
          <div className="text-left">
            <QuestionTitle
              title="Elija la opción correcta según corresponda:"
              subtitle={data.id + '. ' + data.pregunta}
            />
          </div>
          <form>
            <div className="flex flex-col items-start">
              {data.opciones.map((opcion, index) => (
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
