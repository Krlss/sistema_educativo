import ProgressBar from '../progress/progressbar'
import { NavLink } from 'react-router-dom'

interface Props {
  progress: number
  StringImage?: string
  nameCourse: string
  numberCourse: number
  to: string
}

const HomeCard = ({
  StringImage,
  nameCourse,
  numberCourse,
  progress,
  to
}: Props) => {
  return (
    <div className="w-full lg:max-w-3xl">
      <NavLink to={`/asignatura/${to}`}>
        <div className="rounded-md p-4 shadow cursor-pointer hover:shadow-md bg-slate-50 hover:bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center w-full">
              <div className="w-16 h-16 rounded">
                <img
                  src={StringImage}
                  alt={nameCourse}
                  className="object-center object-contain rounded"
                />
              </div>
              <div className="flex justify-between items-start sm:items-center w-full sm:flex-row flex-col gap-3 px-4">
                <div>
                  <h3 className="text-gray-700 font-semibold text-lg">
                    {nameCourse}
                  </h3>
                  <p className="text-gray-500 text-sm">Curso {numberCourse}</p>
                </div>
                <div className="bg-yellow-page p-2 px-4 rounded-md font-medium">
                  Dar Prueba
                </div>
              </div>
            </div>
          </div>
          <ProgressBar progress={progress} />
        </div>
      </NavLink>
    </div>
  )
}

export default HomeCard
