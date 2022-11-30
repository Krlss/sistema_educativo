import Navbar from '../components/header/navbar'
import { Outlet, Navigate } from 'react-router-dom'
import Footer from '../components/footer'
import { getDataSession } from '../utils/dataSession'

const Aplication = () => {
  const token = getDataSession('token')
  if (!token) {
    return <Navigate to="/iniciar-sesion" />
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="container max-w-[1366px] mx-auto px-5 mb-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Aplication
