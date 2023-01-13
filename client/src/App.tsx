import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Home from './pages/home'
import Page404 from './pages/_404'
import DefaultAplicacion from './pages/aplication'
import DashboardCursos from './pages/dashboard/cursos'
import Pruebas from './pages/dashboard/pruebas'
import CoursePresentation from './pages/home/CoursePresentation'
import UnitPresentation from './pages/home/UnitPresentation'
import ClassPresentation from './pages/home/ClassPresentation'
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import GeneralContext from './contexts/context'
import Game from './pages/home/game'
import LoadingAllScreen from './components/loader/all-screen'
import DefaultAplication from './pages/dashboardAplication'
const App = () => {
  const { config } = useContext(GeneralContext)
  return (
    <>
      <Routes>
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/" element={<DefaultAplicacion />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/asignatura/:asignatureId"
            element={<CoursePresentation />}
          />
          <Route
            path="/asignatura/:asignatureId/unidad/:unitId"
            element={<UnitPresentation />}
          />
          <Route
            path="/asignatura/:asignatureId/unidad/:unitId/tema/:topicId"
            element={<ClassPresentation />}
          />
          <Route path="/prueba" element={<Game />} />
          <Route
            path="/asignatura/:asignatureId/unidad/:unitId/prueba"
            element={<Game />}
          />
          <Route path="/prueba" element={<Game />} />
          <Route path="/dashboard" element={<DefaultAplication />}>
            <Route path="cursos" element={<DashboardCursos />} />
            <Route path="pruebas" element={<Pruebas />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      {config.loading && <LoadingAllScreen />}
    </>
  )
}

export default App
