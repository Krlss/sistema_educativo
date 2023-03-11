import ProgressBar from '../progress/progressbar'
import { Link, NavLink } from 'react-router-dom'

interface Props {
  progress: number
  StringImage?: string
  nameCourse: string
  numberCourse: number
  to: string
  canGiveExam: boolean
  titleButton?: string
  asignatureId?: string
  nota?: number
}

const HomeCard = ({
  StringImage,
  nameCourse,
  numberCourse,
  progress,
  to,
  canGiveExam,
  titleButton,
  asignatureId,
  nota
}: Props) => {
  return (
    <div className="w-full lg:max-w-4xl">
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
                {canGiveExam && !nota && nota != 0 && (
                  <div className="px-3 py-2 font-bold text-sm rounded mb-2 text-center shadow-md bg-yellow-page hover:bg-yellow2-page cursor-pointer sm:max-w-[110px] w-full">
                    <Link to={`/asignatura/${asignatureId}/prueba`}>
                      {titleButton}
                    </Link>
                  </div>
                )}
                {nota ? (
                  <div className="px-3 py-2 font-bold text-sm rounded mb-2 text-center bg-green-page cursor-default text-white">
                    Calificación: {nota.toFixed(2) || 0}
                  </div>
                ) : null}
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
