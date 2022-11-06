import QuestionTitle from '../title/questionTitle'

const data = {
  pregunta:
    '¿Qué cifras en números está escrita incorrectamente según su lectura?',
  opciones: [
    {
      value: false,
      texto: 'Cuatrocientos cincuenta y tres mil quinientos sesenta y tres',
      number: '453 563'
    },
    {
      opcion: true,
      texto: 'Seiscientos treinta y nueve mil ochocientos cuarenta y dos',
      number: '639 842'
    },
    {
      opcion: false,
      texto: 'Novecientos treinta y cinco mil cuatrocientos sesenta y ocho',
      number: '935 468'
    }
  ]
}

const ChooseAnOptionNumToText = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen-calculator flex-col">
        <div className="flex flex-col items-start justify-center">
          <div className="text-left">
            <QuestionTitle title={data.pregunta} />
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
                  <div className="flex items-center">
                    <span className="ml-2 text-red-500">{opcion.number}</span>
                    <span className="ml-2">{opcion.texto}</span>
                  </div>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChooseAnOptionNumToText
