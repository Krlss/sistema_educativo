import Navbar from '../components/header/navbar'
import { Outlet } from 'react-router-dom'
import BgPage from '../assets/background.png'

const Aplication = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div
        className="w-full h-full bg-cover absolute top-0 left-0 -z-10"
        style={{
          background: `url(${BgPage})`
        }}
      />
    </>
  )
}

export default Aplication
