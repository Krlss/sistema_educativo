import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import DefaultAvatar from '../../assets/default_avatar.png'

const Navbar = () => {
  const navLinkDefaultClass = 'hover:bg-yellow-page py-2 px-3 rounded-md mx-1'
  return (
    <nav className="w-full h-14 bg-white">
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="Logo" className="h-10 mr-2" />
          <span className="text-black-logo font-extrabold text-xl font-chivo">
            Mapple
          </span>
        </div>
        <ul className="flex items-center justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkDefaultClass} ${isActive ? 'bg-yellow-page' : ''}`
            }>
            <li className="text-black-logo font-semibold">Inicio</li>
          </NavLink>

          <NavLink
            to="/cursos"
            className={({ isActive }) =>
              `${navLinkDefaultClass} ${
                isActive ? 'bg-yellow-page' : ''
              } group relative`
            }>
            <li className="text-black-logo font-semibold">Cursos</li>

            <ul className="absolute hidden group-hover:block border top-10 left-0 bg-white shadow-md">
              <NavLink to="/cursos/computacion">
                <li className="text-black-logo font-semibold hover:bg-yellow-page py-4 px-6">
                  Computación
                </li>
              </NavLink>
              <NavLink to="/cursos/ingles">
                <li className="text-black-logo font-semibold hover:bg-yellow-page py-4 px-6">
                  Inglés
                </li>
              </NavLink>
              <NavLink to="/cursos/matematicas">
                <li className="text-black-logo font-semibold hover:bg-yellow-page py-4 px-6">
                  Matemáticas
                </li>
              </NavLink>
            </ul>
          </NavLink>
        </ul>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <img
              src={DefaultAvatar}
              className="w-10 h-10 rounded-full bg-gray-300"
            />
            <span className="mx-2">Krlss</span>

            <svg
              className="h-6 w-6 text-gray-600 fill-current peer"
              viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z" fill="currentColor" />
            </svg>

            <ul className="absolute hidden peer-hover:block hover:block">
              <li>
                <a href="#">Perfil</a>
              </li>
              <li>
                <a href="#">Cerrar sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
