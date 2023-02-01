import { NavLink, useLocation } from 'react-router-dom'
import Icon from '../icons'
import React from 'react'

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
          return ` flex items-center gap-2 hover:text-blue-500 group p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${
            isActive && 'text-blue-500 bg-gray-100'
          }`
        }}>
        <Icon
          viewBox="16 16"
          width={16}
          height={16}
          className={`group-hover:fill-current group-hover:text-blue-500 text-gray-500 transition duration-75 ${
            isTo && 'fill-current text-blue-500'
          }`}>
          {children}
        </Icon>
        <span className="truncate max-w-[12rem]">{text}</span>
      </NavLink>
    </li>
  )
}

export default MyNavLink
