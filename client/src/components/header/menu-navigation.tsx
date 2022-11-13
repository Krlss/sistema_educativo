import { useContext } from 'react'
import GeneralContext from '../../contexts/context'
import { NavLink } from 'react-router-dom'

const MenuNavigation = () => {
  const { config } = useContext(GeneralContext)
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

      <div className="hover:bg-yellow-page group relative py-2 cursor-default px-4 rounded-md">
        <li className="text-black-logo font-semibold">Cursos</li>

        <ul className="absolute hidden group-hover:block border top-10 left-0 bg-white shadow-md z-50">
          {config.asignatures.map((asignature, index) => (
            <NavLink to={`/cursos/${asignature._id}`} key={index}>
              <li className="text-black-logo font-semibold hover:bg-yellow-page py-4 px-6">
                {asignature.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </ul>
  )
}

export default MenuNavigation
