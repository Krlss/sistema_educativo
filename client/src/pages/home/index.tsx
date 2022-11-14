import { useContext } from 'react'
import GeneralContext from '../../contexts/context'
import HomeCard from '../../components/cards/homeCard'
import LogoComputer from '../../assets/class_computer.jpeg'
import LogoEnglish from '../../assets/class_english.jpeg'
import LogoMath from '../../assets/class_math.jpg'
import CenterLogo from '../../components/logo/centerLogo'
const Home = () => {
  const { user, config } = useContext(GeneralContext)

  return (
    <>
      <CenterLogo />
      <h1 className="text-4xl font-bold text-gray-800">
        ¡Hola, @{user.username} bienvenido a{' '}
        <span className="text-red-logo font-chivo">Mapple</span>!
      </h1>

      <h2 className="text-2xl font-bold text-gray-800">
        Estos son tus progresos en los cursos
      </h2>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap mt-4 gap-8">
          {config.asignatures.map((asignature, index) => (
            <HomeCard
              key={index}
              numberCourse={index + 1}
              nameCourse={asignature.name}
              progress={0}
              to={asignature._id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
