import Icon from '../icons'
import HambugerMenu from '../icons/hamburger-menu'
import CrossIcon from '../icons/cross'
import DefaultAvatar from '../../assets/default_avatar.png'
import { NavLink } from 'react-router-dom'

interface MenuUserProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

const MenuUser = ({ isMenuOpen, setIsMenuOpen }: MenuUserProps) => {
  return (
    <>
      <div className="md:flex items-center md:order-2 hidden group relative">
        <button type="button" className="flex items-center">
          <img
            src={DefaultAvatar}
            className="w-10 h-10 rounded-full bg-gray-300"
          />
          <span className="mx-2">Krlss</span>
          <svg
            className="h-6 w-6 text-gray-600 fill-current"
            viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" fill="currentColor" />
          </svg>
        </button>
        <div className="absolute hidden group-hover:block top-6 -left-20 z-50 my-4 bg-white rounded divide-y divide-gray-100 shadow-md">
          <div className="py-3 px-4 max-w-xs">
            <span className="block text-sm font-medium truncate">
              Carlos Pico
            </span>
            <span className="block text-sm font-medium truncate">
              cpico6375@gmail.com
            </span>
          </div>
          <ul className="py-1">
            <NavLink to="/">
              <li className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                Dashboard
              </li>
            </NavLink>

            <NavLink to="/">
              <li className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                Mi perfil
              </li>
            </NavLink>

            <NavLink to="/">
              <li className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                Cerrar sesión
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
      <button
        type="button"
        className="flex items-center justify-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Icon
          viewBox={`${isMenuOpen ? '16 16' : '20 20'}`}
          width={20}
          height={20}
          fill="currentColor">
          {isMenuOpen ? <CrossIcon /> : <HambugerMenu />}
        </Icon>
      </button>
    </>
  )
}

export default MenuUser
