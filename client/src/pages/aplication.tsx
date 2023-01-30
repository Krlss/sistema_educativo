import Navbar from '../components/header/navbar'
import { Outlet, Navigate, NavLink, useLocation } from 'react-router-dom'
import Footer from '../components/footer'
import { getDataSession } from '../utils/dataSession'
import Icon from '../components/icons'
import Curso from '../components/icons/curso'
import Unidad from '../components/icons/unidad'
import Estudiantes from '../components/icons/students'
import Reports from '../components/icons/report'
import React from 'react'

const Aplication = () => {
  const token = getDataSession('token')
  if (!token) {
    return <Navigate to="/iniciar-sesion" />
  }

  const location = useLocation()

  const isDashboard = location.pathname.includes('dashboard')

  return (
    <div className="flex flex-col justify-between h-screen">
      {isDashboard ? (
        <div className="fixed lg:block hidden h-full max-w-full mt-16">
          <div className="h-full px-3 pt-4 overflow-y-auto bg-white dark:bg-gray-800 shadow">
            <ul className="space-y-2">
              <MyNavLink text="Cursos" to="cursos">
                <Curso />
              </MyNavLink>
              <MyNavLink text="Pruebas" to="pruebas">
                <Unidad />
              </MyNavLink>
              <MyNavLink text="Estudiantes" to="reportes">
                <Estudiantes />
              </MyNavLink>
              <MyNavLink text="Reportes" to="reportes">
                <Reports />
              </MyNavLink>
            </ul>
          </div>
        </div>
      ) : null}

      <Navbar />
      <div className={`p-4 rounded-lg mt-14 ${isDashboard ? 'lg:ml-40' : ''}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Aplication

export const MyNavLink = ({
  to,
  children,
  text
}: {
  to: string
  children: React.ReactNode
  text: string
}) => {
  const location = useLocation()
  const isTo = location.pathname.includes(to)
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => {
          return ` flex items-center gap-2 hover:text-blue-500 group p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
            isActive &&
            'text-blue-500 bg-gray-100 dark:text-white dark:bg-gray-700'
          }`
        }}>
        <Icon
          viewBox="16 16"
          width={16}
          height={16}
          className={`group-hover:fill-current group-hover:text-blue-500 text-gray-500 transition duration-75 dark:text-gray-400  dark:group-hover:text-white ${
            isTo && 'fill-current text-blue-500'
          }`}>
          {children}
        </Icon>
        <span>{text}</span>
      </NavLink>
    </li>
  )
}
