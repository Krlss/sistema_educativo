import ProgressBar from '../progress/progressbar'
import QualificationCourse from '../progress/qualificationCourse'
import { NavLink } from 'react-router-dom'

interface Props {
  progress: number
  StringImage: string
  nameCourse: string
  numberCourse: number
  to: string
  nota: number
}

const HomeCard = ({
  StringImage,
  nameCourse,
  numberCourse,
  progress,
  to,
  nota
}: Props) => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-md p-4">
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
          <QualificationCourse qualification={nota} />
        </div>
        <div className="container mx-auto">
          <span className="block">Unidades completadas: 5</span>
          <span className="block">
            La siguiente lección será el día 08/07/22
          </span>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  )
}

export default HomeCard
