import ProgressBar from '../progress/progressbar'
import { NavLink } from 'react-router-dom'

interface Props {
  progress: number
  StringImage: string
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
      <div className="bg-white rounded border-2 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full">
              <img
                src={StringImage}
                alt={nameCourse}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="ml-4">
              <NavLink to={`/cursos/${to}`}>
                <h3 className="text-gray-700 font-semibold text-lg">
                  {nameCourse}
                </h3>
              </NavLink>
              <p className="text-gray-500 text-sm">Curso {numberCourse}</p>
            </div>
          </div>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  )
}

export default HomeCard
