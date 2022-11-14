import Icon from '../icons'
import HambugerMenu from '../icons/hamburger-menu'
import CrossIcon from '../icons/cross'
import DefaultAvatar from '../../assets/default_avatar.png'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import GeneralContext from '../../contexts/context'

interface MenuUserProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

const MenuUser = ({ isMenuOpen, setIsMenuOpen }: MenuUserProps) => {
  const { user, logout } = useContext(GeneralContext)

  return (
    <>
      <div className="md:flex items-center md:order-2 hidden group relative">
        <button
          type="button"
          className="flex items-center min-w-[200px] justify-between">
          <div className="flex items-center max-w-[180px]">
            <img
              src={DefaultAvatar}
              className="w-10 h-10 rounded-full bg-gray-300"
            />
            <span className="mx-2 truncate">{user.username}</span>
          </div>
          <svg
            className="h-6 w-6 text-gray-600 fill-current"
            viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" fill="currentColor" />
          </svg>
        </button>
        <div className="absolute hidden group-hover:block top-6 z-50 my-4 bg-white rounded divide-y divide-gray-100 shadow-md max-w-[200px]">
          <div className="py-3 px-4">
            <span className="block text-sm font-medium truncate">
              {user.lastname} {user.name}
            </span>
            <span className="block text-sm font-medium truncate">
              {user.mail}
            </span>
          </div>
          <ul className="py-1">
            <NavLink to="/">
              <li className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                Mi perfil
              </li>
            </NavLink>

            <NavLink onClick={() => logout()} to="/iniciar-sesion">
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
