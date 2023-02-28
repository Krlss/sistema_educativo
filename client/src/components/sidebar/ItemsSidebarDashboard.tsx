import Curso from '../icons/curso'
import Unidad from '../icons/unidad'
import Estudiantes from '../icons/students'
import Reports from '../icons/report'
import MyNavLink from '../navLink/myNavlink'
import Users from '../icons/users'
// import Periods from '../icons/periods'

const ItemsSidebarDashboard = () => {
  return (
    <ul className="space-y-2">
      <MyNavLink text="Periodos" to="/dashboard/periodos">
        <Curso />
      </MyNavLink>
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
      <MyNavLink text="Estudiantes" to="/dashboard/estudiantes">
        <Estudiantes />
      </MyNavLink>
      <MyNavLink text="Cambiar rol a usuarios" to="/dashboard/usuarios">
        <Users />
      </MyNavLink>
      <MyNavLink text="Reportes" to="/dashboard/reportes">
        <Reports />
      </MyNavLink>
    </ul>
  )
}

export default ItemsSidebarDashboard
