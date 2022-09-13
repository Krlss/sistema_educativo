import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Home from './pages/home'
import Page404 from './pages/_404'
import DefaultAplicacion from './pages/aplication'
import CoursePresentation from './pages/home/CoursePresentation'
import Courses from './pages/home/courses'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/" element={<DefaultAplicacion />}>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/cursos/:curso" element={<CoursePresentation />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
