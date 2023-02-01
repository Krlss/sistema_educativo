import Navbar from '../components/header/navbar'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import Footer from '../components/footer'
import { getDataSession } from '../utils/dataSession'
import StaticLeftSidebar from '../components/sidebar/staticLeftSidebar'

const Aplication = () => {
  const token = getDataSession('token')
  if (!token) {
    return <Navigate to="/iniciar-sesion" />
  }

  const location = useLocation()

  const isDashboard = location.pathname.includes('dashboard')

  return (
    <div className="flex flex-col justify-between h-screen">
      {isDashboard ? <StaticLeftSidebar /> : null}
      <Navbar />
      <div
        className={`p-4 rounded-lg mt-14 ${
          isDashboard ? 'lg:ml-[16rem]' : ''
        }`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Aplication
