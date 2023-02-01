import Curso from '../icons/curso'
import Unidad from '../icons/unidad'
import Estudiantes from '../icons/students'
import Reports from '../icons/report'
import MyNavLink from '../navLink/myNavlink'

const ItemsSidebarDashboard = () => {
  return (
    <ul className="space-y-2">
      <MyNavLink text="Cursos" to="/dashboard/cursos">
        <Curso />
      </MyNavLink>
      <MyNavLink text="Pruebas" to="/dashboard/pruebas">
        <Unidad />
      </MyNavLink>
      <MyNavLink
        text="Inscribir estudiantes"
        to="/dashboard/inscribir-estudiantes">
        <Reports />
      </MyNavLink>
      <MyNavLink text="Estudiantes" to="/dashboard/reportes">
        <Estudiantes />
      </MyNavLink>
      <MyNavLink text="Reportes" to="/dashboard/reportes">
        <Reports />
      </MyNavLink>
    </ul>
  )
}

export default ItemsSidebarDashboard
