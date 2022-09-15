import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Home from './pages/home'
import Page404 from './pages/_404'
import DefaultAplicacion from './pages/aplication'
import CoursePresentation from './pages/home/CoursePresentation'
import Courses from './pages/home/courses'
import { Routes, Route } from 'react-router-dom'

// tests
import DragAndDropChoose from './components/exercise/DragAndDropChooseText'
import CartesianCoordinate from './components/exercise/CartesianCoordinate'
import TrueOrFalse from './components/exercise/TrueOrFalse'
import ChooseAnOption from './components/exercise/ChooseAnOption'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/" element={<DefaultAplicacion />}>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="*" element={<Page404 />} />

          {/* Rutas de test */}
          <Route
            path="/arrastrar-y-soltar-texto"
            element={<DragAndDropChoose />}
          />
          <Route path="/plano-cartesiano" element={<CartesianCoordinate />} />
          <Route path="/verdadero-o-falso" element={<TrueOrFalse />} />
          <Route path="/elegir-una-opcion" element={<ChooseAnOption />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
