import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Home from './pages/home'
import Page404 from './pages/_404'
import DefaultAplicacion from './pages/aplication'
import CoursePresentation from './pages/home/CoursePresentation'
import UnitPresentation from './pages/home/UnitPresentation'
import ClassPresentation from './pages/home/ClassPresentation'
import Courses from './pages/home/courses'
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import GeneralContext from './contexts/context'
import Game from './pages/home/game'
import LoadingAllScreen from './components/loader/all-screen'

const App = () => {
  const { config } = useContext(GeneralContext)
  return (
    <>
      <Routes>
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/" element={<DefaultAplicacion />}>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
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
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      {config.loading && <LoadingAllScreen />}
    </>
  )
}

export default App
