import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import MenuNavigation from './menu-navigation'
import MenuUser from './menu-user'
import DefaultAvatar from '../../assets/default_avatar.png'
import MobileMenuNormal from '../navLink/mobileMenuNormal'

import GeneralContext from '../../contexts/context'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false)
  const { user } = useContext(GeneralContext)

  return (
    <nav className="bg-white p-2 w-full z-50 mb-8 shadow">
      <div className="max-w-[1366px] h-full mx-auto lg:px-0 px-5">
        <div className="flex justify-between items-center mx-auto">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Logo" className="h-10 mr-2" />
            <span className="font-extrabold text-xl font-chivo text-red-logo">
              Mapple
            </span>
          </div>
          <MenuNavigation />
          <MenuUser
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        {isMenuOpen && (
          <div className="md:hidden block bg-white">
            <ul className="py-1">
              <MobileMenuNormal label="Inicio" to="/" />
              <MobileMenuNormal label="Dashboard" to="/dashboard" />

              <NavLink to="/mi-perfil">
                <li className="flex items-center py-2 px-2 text-sm text-gray-700 hover:bg-gray-100">
                  <img
                    src={DefaultAvatar}
                    className="w-6 h-6 rounded-full bg-gray-300"
                  />
                  <span className="mx-2">{user.username}</span>
                </li>
              </NavLink>

              <li>
                <button
                  onClick={() => setIsCourseMenuOpen(!isCourseMenuOpen)}
                  className="block py-2 px-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  Cursos
                </button>
                {isCourseMenuOpen && (
                  <ul>
                    <MobileMenuNormal
                      label="Computación"
                      to="/cursos/computacion"
                      sub
                    />
                    <MobileMenuNormal label="Inglés" to="/cursos/ingles" sub />
                    <MobileMenuNormal
                      label="Matemáticas"
                      to="/cursos/matematicas"
                      sub
                    />
                  </ul>
                )}
              </li>
              <MobileMenuNormal label="Cerrar sesión" to="#" />
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
