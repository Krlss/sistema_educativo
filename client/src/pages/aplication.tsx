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
    <>
      <Navbar />
      <div className="container min-h-screen max-w-[1366px] mx-auto px-5">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Aplication
