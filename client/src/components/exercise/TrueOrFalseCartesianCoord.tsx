import CartesianPlane from '../CartesianPlane'
import QuestionTitle from '../title/questionTitle'

const TrueOrFalseCartesianCoord = ({
  subtitle,
  points,
  value
}: {
  subtitle: string
  value: boolean
  points: { x: number; y: number }[]
}) => {
  return (
    <div className="container mx-auto pt-20 w-11/12">
      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-col items-start justify-center">
          <QuestionTitle
            title="Elija la opción correcta: Verdadero o falso"
            subtitle={subtitle}
          />
          <form>
            <div className="flex items-start justify-start">
              <div className="flex flex-col items-start">
                <div className="flex justify-center w-full">
                  <CartesianPlane points={points} />
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
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TrueOrFalseCartesianCoord
