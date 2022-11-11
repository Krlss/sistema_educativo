import Navbar from '../components/header/navbar'
import { Outlet, Navigate } from 'react-router-dom'
import Footer from '../components/footer'
import { getCookie } from '../utils/Cookie'
import { useEffect } from 'react'

const Aplication = () => {
  document.body.classList.add('bg-slate-200')

  const token = getCookie('token')
  if (!token) {
    return <Navigate to="/iniciar-sesion" />
  }

  useEffect(() => {}, [])

  return (
    <>
      <Navbar />
      <div className="container min-h-screen max-w-[1366px] mx-auto lg:px-0 px-5">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Aplication
