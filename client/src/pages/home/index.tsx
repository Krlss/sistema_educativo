import HomeCard from '../../components/cards/homeCard'
import CenterLogo from '../../components/logo/centerLogo'
import { PROGRESS } from '../../types/ContextUser'
import useHomePage from '../../hooks/useHomePage'
import GeneralContext from '../../contexts/context'
import { useContext } from 'react'
import { getDataSession } from '../../utils/dataSession'
const Home = () => {
  const { user } = useContext(GeneralContext)
  const questionsId = getDataSession('questionsId')

  return (
    <div className={`${!user.progress.length && 'h-screen'}`}>
      <CenterLogo />
      <h1 className="text-4xl font-bold text-gray-800">
        ¡Hola, @{user.name} bienvenido a{' '}
        <span className="text-red-logo font-chivo">Mapple</span>!
      </h1>

      <h2 className="text-2xl font-bold text-gray-800">
        {user.progress.length
          ? 'Estos son tus progresos en los cursos'
          : 'No hay cursos disponibles, por favor contacta a tu profesor'}
      </h2>

      <div className="flex items-center justify-between mb-20">
        <div className="flex flex-wrap mt-4 gap-8">
          {user.progress.map((p, index) => {
            /* const findCourse = user.progress.find(
              course => course.id_asignature === asignature.id
            ) as PROGRESS

            const canGiveExam = findCourse?.unit?.reduce(
              (acc, u, _, array) => {
                if (u.finished) acc.unit++
                if (array.length === acc.unit) acc.can = 1
                return acc
              },
              { can: 0, unit: 0 }
            ) as { can: number; unit: number } */

            return (
              <HomeCard
                key={index}
                numberCourse={index + 1}
                nameCourse={p.name}
                progress={p.percentage || 0}
                to={p.id}
                StringImage={p.image}
                canGiveExam={p.percentage === 100}
                titleButton={`${
                  p.id === questionsId?.asignatureId
                    ? 'Continuar'
                    : 'Iniciar prueba'
                }`}
                asignatureId={p.id}
                nota={p.nota}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
