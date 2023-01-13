import React, { useState } from 'react'
import { Outlet, Navigate, NavLink } from 'react-router-dom'
import Icon from '../components/icons'
import Curso from '../components/icons/curso'
import Unidad from '../components/icons/unidad'
import Estudiantes from '../components/icons/students'
import Reports from '../components/icons/report'

const DefaultAplication = () => {
  return (
    <>
      <div className="w-full justify-start py-4 gap-4 flex bg-white shadow px-10 md:flex-row flex-col">
        <MyNavLink icon={<Curso />} text="Cursos" to="cursos" />
        <MyNavLink icon={<Unidad />} text="Pruebas" to="pruebas" />
        <MyNavLink icon={<Estudiantes />} text="Estudiantes" to="reportes" />
        <MyNavLink icon={<Reports />} text="Reportes" to="reportes" />
      </div>
      <div className="p-5">
        <Outlet />
      </div>
    </>
  )
}
export default DefaultAplication

const MyNavLink = ({
  to,
  icon,
  text
}: {
  to: string
  icon: React.ReactNode
  text: string
}) => {
  const [active, setActive] = useState(false)
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        setActive(isActive)
        return `text-sm flex items-center gap-2 hover:text-blue-500 group ${
          active && 'text-blue-500 font-medium'
        }`
      }}>
      <Icon
        viewBox="16 16"
        width={16}
        height={16}
        className={`group-hover:fill-current group-hover:text-blue-500 ${
          active && 'fill-current text-blue-500'
        }`}>
        {icon}
      </Icon>
      <span>{text}</span>
    </NavLink>
  )
}
