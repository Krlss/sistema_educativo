import { useState, useEffect, useContext } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import GeneralContext from '../../contexts/context'
import { pastelColors, getRamdonArrayColors } from '../../constants/colors'
import { ASIGNATURE } from '../../types/ContextAsignature'
import { useGetAsignature } from '../../service/asignatures/custom-hook'
const CoursePresentation = () => {
  const { curso } = useParams()
  const [colors, setColors] = useState(pastelColors)
  const [asignature, setAsignature] = useState<ASIGNATURE>()
  const { getAsignature } = useGetAsignature()
  const navigate = useNavigate()
  const { setLoading } = useContext(GeneralContext)

  useEffect(() => {
    if (curso) {
      setLoading(true)
      getAsignature({
        variables: {
          id: curso
        },
        onCompleted: data => {
          setAsignature(data.getAsignature)
          setColors(getRamdonArrayColors(data.getAsignature.unit.length))
          setLoading(false)
        },
        onError: () => {
          setLoading(false)
          navigate('/')
        }
      })
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
            <NavLink
              className="rounded-md flex items-center my-3 justify-start shadow cursor-pointer hover:shadow-md bg-slate-50 hover:bg-white h-[150px] md:h-[160px]"
              key={index}
              to={`/curso/${curso}/${unt._id}`}>
              <div
                className="items-center justify-center min-w-[104px] max-w-[80px] w-full rounded-l-md font-bold text-xl md:flex hidden h-full"
                style={{
                  backgroundColor: colors[index]
                }}>
                {unt._id} .°
              </div>
              <div className="flex items-center flex-1">
                <div className="p-4">
                  <h1 className="font-semibold">Unidad {unt._id}</h1>
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoursePresentation
