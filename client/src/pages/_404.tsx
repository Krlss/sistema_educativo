import Logo404 from '../assets/404_cry_monster.png'
const Page404 = () => {
  return (
    <div className="container mx-auto h-screen-calculator flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={Logo404} alt="Logo 404" className="h-56" />
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          ¡Ups! Parece que la página que buscas no existe
        </h1>
      </div>
    </div>
  )
}

export default Page404
