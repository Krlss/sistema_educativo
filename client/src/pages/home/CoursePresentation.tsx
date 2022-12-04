import { NavLink } from 'react-router-dom'
import { useGetAsignature } from '../../service/asignatures/custom-hook'
import { useContext } from 'react'
import GeneralContext from '../../contexts/context'
import { PROGRESS } from '../../types/contextUser'
const CoursePresentation = () => {
  const { asignature, asignatureId, colors } = useGetAsignature()
  const { user } = useContext(GeneralContext)

  console.log({ user })

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

            const isCompleted = unitFined?.unit
              ?.find(u => u.id_unit === unt._id)
              ?.topic?.reduce((acc, t) => {
                if (t.finished) acc++
                return acc
              }, 0)

            return (
              <div
                key={index}
                className="rounded-md flex items-center justify-start my-3 shadow cursor-pointer hover:shadow-md bg-slate-50 hover:bg-white h-[150px] md:h-[120px]">
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
                {asignature.unit.length === isCompleted && (
                  <div className="px-3 py-2 bg-yellow-page text-black font-bold text-sm rounded mr-4 max-w-[110px] w-full text-center shadow-md">
                    <a>Dar prueba</a>
                  </div>
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
