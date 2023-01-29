import React from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import Icon from '../components/icons'
import Curso from '../components/icons/curso'
import Unidad from '../components/icons/unidad'
import Estudiantes from '../components/icons/students'
import Reports from '../components/icons/report'

const DefaultAplication = () => {
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
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
      </aside>

      <div className="p-4 lg:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="w-full justify-start py-4 gap-4 flex bg-white shadow px-10 lg:flex-row flex-col"></div>
          <Outlet />
        </div>
      </div>
    </>
  )
}
export default DefaultAplication

const MyNavLink = ({
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
