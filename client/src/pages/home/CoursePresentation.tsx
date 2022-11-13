import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GeneralContext from '../../contexts/context'
import { pastelColors } from '../../constants/colors'
import { ASIGNATURE } from '../../types/ContextAsignature'

const CoursePresentation = () => {
  const { curso } = useParams()
  const [colors] = useState(pastelColors)
  const [asignature, setAsignature] = useState<ASIGNATURE>()

  const { config } = useContext(GeneralContext)

  useEffect(() => {
    const asignature_ = config.asignatures.find(
      asignature => asignature._id === curso
    ) as ASIGNATURE
    setAsignature(asignature_)
  }, [curso])

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
        <div className="mx-auto max-w-5xl pb-20">
          {asignature?.unit?.map((unt, index) => (
            <div
              className="rounded-md flex items-center my-3 justify-start shadow cursor-pointer hover:shadow-md bg-slate-50 hover:bg-white"
              key={index}>
              <div
                className="flex items-center justify-center min-w-[104px] max-w-[80px] w-full rounded-l-md font-bold text-xl h-[104px]"
                style={{
                  backgroundColor:
                    colors[Math.floor(Math.random() * colors.length)]
                }}>
                {unt._id} .°
              </div>
              <div className="flex items-center flex-1">
                <div className="p-4">
                  <h1 className="font-semibold">Unidad {unt._id}</h1>
                  <div className="line-clamp-2">
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
              <div className="mr-10">
                {/* <NavLink to="/">
                    <li className="bg-lightblue-page text-white font-bold text-sm px-4 py-2 rounded text-center list-none">
                      Realizar prueba
                    </li>
                  </NavLink> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoursePresentation
