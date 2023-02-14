import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../icons'

interface Props {
  to: string
  label: string
  viewBox?: string
  children?: React.ReactNode
}

const ItemSidebar = ({ to, label, children, viewBox }: Props) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${
            isActive ? 'bg-yellow-page' : 'hover:bg-gray-100'
          } flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-yellow2-page`
        }>
        {children && viewBox ? <Icon viewBox={viewBox}>{children}</Icon> : null}
        <span className="flex-1 ml-3 whitespace-nowrap">{label}</span>
      </NavLink>
    </li>
  )
}

export default ItemSidebar
