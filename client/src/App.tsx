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
import CartesianCoordinateFull from './components/exercise/CartesianCoordinateFull'
import TrueOrFalse from './components/exercise/TrueOrFalse'
import ChooseAnOption from './components/exercise/ChooseAnOption'
import OrderOneDigitNumbers from './components/exercise/OrderOneDigitNumbers'
import CartesianCoordinateQuadrants from './components/exercise/CartesianCoordinateQuadrants'
import TrueOrFalseCartesianCoord from './components/exercise/TrueOrFalseCartesianCoord'
import CartesianCoordinateObjects from './components/exercise/CartesianCoordinateObjects'

import {
  pointsToF,
  objectCartesianPoints
} from './constants/CartesianConstants'

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

          {/* Rutas de test */}
          <Route
            path="/arrastrar-y-soltar-texto"
            element={<DragAndDropChoose />}
          />
          <Route
            path="/plano-cartesiano"
            element={<CartesianCoordinateFull pointNumbers={4} />}
          />
          <Route
            path="/verdadero-o-falso-plano-cartesiano"
            element={<TrueOrFalseCartesianCoord points={pointsToF} />}
          />
          <Route
            path="/cuadrante-plano-cartesiano"
            element={
              <CartesianCoordinateQuadrants
                pointNumbers={5}
                typeCartesian="IV"
              />
            }
          />
          <Route
            path="/objetos-plano-cartesiano"
            element={
              <CartesianCoordinateObjects
                points={objectCartesianPoints}
                typeCartesian="I"
              />
            }
          />
          <Route path="/verdadero-o-falso" element={<TrueOrFalse />} />
          <Route path="/elegir-una-opcion" element={<ChooseAnOption />} />
          <Route path="/ordenar-digitos" element={<OrderOneDigitNumbers />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
