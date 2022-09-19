import { NavLink } from 'react-router-dom'

const MenuNavigation = () => {
  const navLinkDefaultclassName =
    'hover:bg-yellow-page py-2 px-3 rounded-md mx-1'
  return (
    <ul className="md:flex hidden items-center justify-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${navLinkDefaultclassName} ${isActive ? 'bg-yellow-page' : ''}`
        }>
        <li className="text-black-logo font-semibold">Inicio</li>
      </NavLink>

      <NavLink
        to="/cursos"
        className={({ isActive }) =>
          `${navLinkDefaultclassName} ${
            isActive ? 'bg-yellow-page' : ''
          } group relative`
        }>
        <li className="text-black-logo font-semibold">Cursos</li>

        <ul className="absolute hidden group-hover:block border top-10 left-0 bg-white shadow-md z-50">
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
  )
}

export default MenuNavigation
