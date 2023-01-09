import { NavLink, Link } from 'react-router-dom'
import { useGetAsignature } from '../../service/asignatures/custom-hook'
import { useContext } from 'react'
import GeneralContext from '../../contexts/context'
import { PROGRESS } from '../../types/ContextUser'
import { getDataSession } from '../../utils/dataSession'

const CoursePresentation = () => {
  const { asignature, asignatureId, colors } = useGetAsignature()
  const { user, gameState } = useContext(GeneralContext)
  const questionsId = getDataSession('questionsId')

  return (
    <div className="px-2">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mx-auto">
          <h1 className="text-4xl font-medium text-lightblue-page">
            {asignature?.name}
          </h1>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-medium">{asignature?.description}</span>
        </div>
        <div className="mx-auto max-w-5xl pb-20 w-full">
          {asignature?.unit?.map((unt, index) => {
            const unitFined = user?.progress?.find(p =>
              p.unit?.find(u => u.id_unit === unt._id)
            ) as PROGRESS

            /**
             * Número de temas completados
             */
            const isCompleted = unitFined?.unit
              ?.find(u => u.id_unit === unt._id)
              ?.topic?.filter(t => t.finished).length

            /**
             * Si el número de temas completados es igual al número de temas
             * de la unidad, entonces la unidad está completada
             * */
            const equalsCompleted =
              asignature.unit[index].topic.length === isCompleted

            const isAsignature = user.progress.find(
              p => p.id_asignature === asignatureId
            )

            const isUnit = isAsignature?.unit?.find(u => u.id_unit === unt._id)

            return (
              <div
                key={index}
                className="rounded-md flex items-start justify-between md:flex-row flex-col md:items-center my-3 shadow cursor-pointer hover:shadow-md bg-slate-50 hover:bg-white h-[225px] md:h-[120px] ">
                <NavLink
                  className="rounded-md flex items-center justify-start h-full"
                  to={`/asignatura/${asignatureId}/unidad/${unt._id}`}>
                  <div
                    className="items-center justify-center min-w-[104px] max-w-[80px] w-full rounded-l-md font-bold text-xl md:flex hidden h-full"
                    style={{
                      backgroundColor: colors[index]
                    }}>
                    {index + 1} .°
                  </div>
                  <div
                    className={`flex items-center flex-1 justify-start ${
                      asignature.unit.length === isCompleted && 'max-w-3xl'
                    }`}>
                    <div className="p-4">
                      <h1 className="font-semibold">Unidad {index + 1}</h1>
                      <div className="line-clamp-3 pr-5">
                        <span className="text-sm text-gray-600 font-semibold mr-1">
                          Incluye:
                        </span>
                        {unt.topic.map((tema, index) => (
                          <span className={'text-xs mr-1'} key={index}>
                            {tema.name} {index !== unt?.topic.length - 1 && '|'}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavLink>

                {isUnit?.finished ? (
                  <div className="px-3 py-2 font-bold text-sm rounded md:mr-4 ml-4 mb-4 max-w-[110px] w-full text-center shadow-md bg-green-page cursor-default text-black">
                    Calificación: {isUnit.nota.toFixed(2)}
                  </div>
                ) : equalsCompleted && !gameState.timeLeft ? (
                  <DarPruebaDiv
                    asignature={asignature._id}
                    unit={asignature.unit[index]._id}
                    title="Dar prueba"
                  />
                ) : (
                  equalsCompleted &&
                  questionsId?.asignatureId === asignature._id &&
                  questionsId?.unitId === asignature.unit[index]._id &&
                  gameState.timeLeft && (
                    <DarPruebaDiv
                      asignature={asignature._id}
                      unit={asignature.unit[index]._id}
                      title="Continuar"
                    />
                  )
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CoursePresentation

const DarPruebaDiv = ({
  asignature,
  unit,
  title
}: {
  asignature: string
  unit: string
  title: string
}) => {
  return (
    <div className="px-3 py-2 bg-yellow-page text-black font-bold text-sm rounded mr-4 max-w-[110px] w-full text-center shadow-md hover:bg-yellow2-page">
      <Link to={`/asignatura/${asignature}/unidad/${unit}/prueba`}>
        {title}
      </Link>
    </div>
  )
}
