import Curso from '../icons/curso'
import Unidad from '../icons/unidad'
import Estudiantes from '../icons/students'
import Reports from '../icons/report'
import MyNavLink from '../navLink/myNavlink'
import Users from '../icons/users'
import { useContext } from 'react'
import GeneralContext from '../../contexts/context'

const ItemsSidebarDashboard = () => {
  const { isThisRol } = useContext(GeneralContext)
  const isAdmin = isThisRol(['admin'])
  const isAdminOrTeacher = isThisRol(['admin', 'teacher'])

  return (
    <ul className="space-y-2">
      {isAdmin && (
        <MyNavLink text="Cursos" to="/dashboard/cursos">
          <Curso />
        </MyNavLink>
      )}
      {isAdminOrTeacher && (
        <>
          <MyNavLink text="Pruebas" to="/dashboard/pruebas">
            <Unidad />
          </MyNavLink>
          <MyNavLink
            text="Inscribir estudiantes"
            to="/dashboard/inscribir-estudiantes">
            <Reports />
          </MyNavLink>
          <MyNavLink text="Estudiantes" to="/dashboard/estudiantes">
            <Estudiantes />
          </MyNavLink>
        </>
      )}

      {isAdmin && (
        <MyNavLink text="Cambiar rol a usuarios" to="/dashboard/usuarios">
          <Users />
        </MyNavLink>
      )}
      {isAdminOrTeacher && (
        <MyNavLink text="Reportes" to="/dashboard/reportes">
          <Reports />
        </MyNavLink>
      )}
    </ul>
  )
}

export default ItemsSidebarDashboard
