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

// tests
import DragAndDropChoose from './components/exercise/DragAndDropChooseText'
import CartesianCoordinateFull from './components/exercise/CartesianCoordinateFull'
import TrueOrFalse from './components/exercise/TrueOrFalse'
import OrderOneDigitNumbers from './components/exercise/OrderOneDigitNumbers'
import CartesianCoordinateQuadrants from './components/exercise/CartesianCoordinateQuadrants'
import TrueOrFalseCartesianCoord from './components/exercise/TrueOrFalseCartesianCoord'
import CartesianCoordinateObjects from './components/exercise/CartesianCoordinateObjects'
import SelectPointsCoordinatePlane from './components/exercise/SelectPointsCoordinatePlane'
import TrueOrFalseCartesianImages from './components/exercise/TrueOrFalseCartesianImages'
import TrueOrFalseNumbersAndText from './components/exercise/TrueOrFalseNumbersAndText'
import WriteValueFromText from './components/exercise/WriteValueFromText'
import SelectPlaceTableOption from './components/exercise/SelectPlaceTableOption'
import ListenAndWrite from './components/exercise/ListenAndWrite'
import PositionalSum from './components/exercise/PositionalSum'
import MatchNColumns from './components/exercise/MatchNColumns'
import PlaceSign from './components/exercise/PlaceSign'
import {
  dataPointsToF,
  objectCartesianPoints,
  selectPointsCoordinatePlane,
  dataCartesianPlaneImagesTrueOrFalse
} from './constants/CartesianConstants'

import { dataFigures } from './constants/TrueOrFalse'
import PositionalTable from './components/exercise/PositionalTable'
import { dataPositionalTable } from './constants/PositionalTable'
import { dataSelectPlaceTableOption } from './constants/SelectPlaceTableOption'
import WritePointsCartesianPlane from './components/exercise/WritePointsCartesianPlane'
import WriteNumberPositional from './components/exercise/WriteNumberPositional'
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

          <Route path="/relaciona-columnas" element={<MatchNColumns />} />
        </Route>
        <Route path="/prueba" element={<Game />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {config.loading && <LoadingAllScreen />}
    </>
  )
}

export default App
