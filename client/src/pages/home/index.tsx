import HomeCard from '../../components/cards/homeCard'
import CenterLogo from '../../components/logo/centerLogo'
import { PROGRESS } from '../../types/ContextUser'
import useHomePage from '../../hooks/useHomePage'
const Home = () => {
  const { config, percentage, user } = useHomePage()

  return (
    <>
      <CenterLogo />
      <h1 className="text-4xl font-bold text-gray-800">
        ¡Hola, @{user.name} bienvenido a{' '}
        <span className="text-red-logo font-chivo">Mapple</span>!
      </h1>

      <h2 className="text-2xl font-bold text-gray-800">
        {config.asignatures.length
          ? 'Estos son tus progresos en los cursos'
          : 'No hay cursos disponibles, por favor contacta a tu profesor'}
      </h2>

      <div className="flex items-center justify-between mb-20">
        <div className="flex flex-wrap mt-4 gap-8">
          {config.asignatures.map((asignature, index) => {
            const findCourse = user.progress.find(
              course => course.id_asignature === asignature.id
            ) as PROGRESS

            const canGiveExam = findCourse?.unit?.reduce(
              (acc, u, _, array) => {
                if (u.finished) acc.unit++
                if (array.length === acc.unit) acc.can = 1
                return acc
              },
              { can: 0, unit: 0 }
            ) as { can: number; unit: number }

            return (
              <HomeCard
                key={index}
                numberCourse={index + 1}
                nameCourse={asignature.name}
                progress={percentage[index]}
                to={asignature.id}
                StringImage={asignature.image}
                canGiveExam={!!canGiveExam?.can}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
