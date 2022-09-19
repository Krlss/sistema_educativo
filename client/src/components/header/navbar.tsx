import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import MenuNavigation from './menu-navigation'
import MenuUser from './menu-user'
import DefaultAvatar from '../../assets/default_avatar.png'
import MobileMenuNormal from '../navLink/mobileMenuNormal'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false)

  return (
    <nav className="bg-white p-2 fixed w-full z-50">
      <div className="container h-full mx-auto">
        <div className="flex justify-between items-center mx-auto">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Logo" className="h-10 mr-2" />
            <span className="text-black-logo font-extrabold text-xl font-chivo">
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
                  <span className="mx-2">Krlss</span>
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
