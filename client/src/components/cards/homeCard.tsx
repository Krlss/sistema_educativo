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
    <div className="w-full">
      <NavLink to={`/curso/${to}`}>
        <div className="rounded-md p-4 shadow cursor-pointer hover:shadow-md bg-slate-50 hover:bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full">
                <img
                  src={StringImage}
                  alt={nameCourse}
                  className="w-full h-full rounded-full object-contain"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-gray-700 font-semibold text-lg">
                  {nameCourse}
                </h3>
                <p className="text-gray-500 text-sm">Curso {numberCourse}</p>
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
