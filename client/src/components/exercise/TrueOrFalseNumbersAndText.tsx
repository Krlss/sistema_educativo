const TrueOrFalseNumbersAndText = ({
  data
}: {
  data: {
    title: string
    value: boolean
    options: {
      name: string
      text: string
      value: string
    }[]
  }
}) => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen-calculator flex-col">
        <div className="flex flex-col items-start justify-center px-4">
          <div className="text-left mb-4">
            <h1 className="text-2xl font-bold">{data.title}</h1>
          </div>
          <form>
            <div className="flex flex-col items-start">
              <div>
                {data.options.map((option, index) => {
                  return (
                    <div
                      className="flex items-center border px-4 py-2 gap-2 rounded-md mb-2"
                      key={index}>
                      <div className="border-r">{option.name}</div>
                      <div>
                        <span>
                          <span className="text-red-500 font-bold">
                            {option.value}{' '}
                          </span>
                          {option.text}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
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

export default TrueOrFalseNumbersAndText
