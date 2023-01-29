import { NavLink } from 'react-router-dom'

interface Props {
  to?: string
  label: string
  onClick?: () => void
}

const Menu = ({ to, label, onClick }: Props) => {
  return (
    <li>
      <NavLink
        to={to ?? '#'}
        onClick={onClick}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
        role="menuitem">
        {label}
      </NavLink>
    </li>
  )
}

export default Menu
