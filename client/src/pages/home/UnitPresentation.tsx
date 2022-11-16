import { NavLink } from 'react-router-dom'
import { useGetTopics } from '../../service/topic/custom-hook'

const UnitPresentation = () => {
  const { asignature, colors, asignatureId } = useGetTopics()

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-2">
          <span className="text-2xl font-bold text-blue-600">
            {asignature?.asignature_name}
          </span>
          {asignature?.name && (
            <span className="text-2xl font-bold">- {asignature?.name}</span>
          )}
        </div>
        <div className="mx-auto max-w-5xl pb-20 w-full">
          {asignature?.topic?.map((top, index) => (
            <NavLink
              className="rounded-md flex items-center my-3 justify-start shadow cursor-pointer hover:shadow-md bg-slate-50 hover:bg-white h-[150px] md:h-[120px]"
              key={index}
              to={`/curso/${asignatureId}/${top._id}`}>
              <div
                className="items-center justify-center min-w-[104px] max-w-[80px] w-full rounded-l-md font-bold text-xl md:flex hidden h-full"
                style={{
                  backgroundColor: colors[index]
                }}>
                {index + 1} .°
              </div>
              <div className="flex md:flex-row flex-col justify-between md:items-center w-full p-5">
                <div className="md:pb-0 pb-4 md:pr-10">
                  <h1 className="font-semibold">Tema {index + 1}</h1>
                  <div className="line-clamp-3 max-w-lg">
                    <span className="text-sm text-gray-600 font-semibold">
                      {top.name}
                    </span>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-2 mr-5">
                  <NavLink to="/">
                    <li className="bg-lightblue-page text-white font-bold text-sm px-4 py-2 rounded text-center list-none min-w-[115px]">
                      Ver clase
                    </li>
                  </NavLink>
                  <NavLink to="/">
                    <li className="bg-yellow-page text-white font-bold text-sm px-4 py-2 rounded text-center list-none min-w-[115px]">
                      Dar prueba
                    </li>
                  </NavLink>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UnitPresentation
