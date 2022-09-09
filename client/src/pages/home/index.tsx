import HomeCard from '../../components/cards/homeCard'
import LogoComputer from '../../assets/class_computer.jpeg'
import LogoEnglish from '../../assets/class_english.jpeg'
import LogoMath from '../../assets/class_math.jpg'

const Home = () => {
  return (
    <div className="h-screen-calculator pt-10 px-2">
      <div className="container mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            ¡Hola, @Krlss bienvenido a{' '}
            <span className="text-red-logo font-chivo">Mapple</span>!
          </h1>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Estos son tus progresos en los cursos
          </h2>

          <div className="flex flex-wrap mt-4 gap-8">
            <HomeCard
              StringImage={LogoComputer}
              nameCourse="Computación"
              numberCourse={1}
              progress={50}
              to="computacion"
              nota={7}
            />
            <HomeCard
              StringImage={LogoEnglish}
              nameCourse="Inglés"
              numberCourse={2}
              progress={45}
              to="ingles"
              nota={6}
            />
            <HomeCard
              StringImage={LogoMath}
              nameCourse="Matemáticas"
              numberCourse={3}
              progress={100}
              to="matematicas"
              nota={10}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
