const TrueOrFalse = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen-calculator flex-col">
        <div className="flex flex-col items-start justify-center">
          <div className="text-left">
            <h1 className="text-2xl font-bold text-center">
              Elija la opción correcta: Verdadero o falso
            </h1>
          </div>
          <form>
            <div className="flex items-start justify-start">
              <span className="text-lg mr-1">1.</span>
              <div className="flex flex-col items-start">
                <p className="text-lg">
                  ¿El nombre que recibe el eje vertical es eje Y o de
                  coordenadas?
                </p>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TrueOrFalse
