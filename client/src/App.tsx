import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Home from './pages/home'
import Page404 from './pages/_404'
import DefaultAplicacion from './pages/aplication'
import CoursePresentation from './pages/home/CoursePresentation'
import UnitPresentation from './pages/home/UnitPresentation'
import Courses from './pages/home/courses'
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import GeneralContext from './contexts/context'

// tests
import DragAndDropChoose from './components/exercise/DragAndDropChooseText'
import CartesianCoordinateFull from './components/exercise/CartesianCoordinateFull'
import TrueOrFalse from './components/exercise/TrueOrFalse'
import ChooseAnOption from './components/exercise/ChooseAnOption'
import OrderOneDigitNumbers from './components/exercise/OrderOneDigitNumbers'
import CartesianCoordinateQuadrants from './components/exercise/CartesianCoordinateQuadrants'
import TrueOrFalseCartesianCoord from './components/exercise/TrueOrFalseCartesianCoord'
import CartesianCoordinateObjects from './components/exercise/CartesianCoordinateObjects'
import DragAndDropObjects from './components/exercise/DragAndDropObjects'
import SelectPointsCoordinatePlane from './components/exercise/SelectPointsCoordinatePlane'
import TrueOrFalseCartesianImages from './components/exercise/TrueOrFalseCartesianImages'
import TrueOrFalseNumbersAndText from './components/exercise/TrueOrFalseNumbersAndText'
import WriteValueFromText from './components/exercise/WriteValueFromText'
import SelectPlaceTableOption from './components/exercise/SelectPlaceTableOption'
import ListenAndWrite from './components/exercise/ListenAndWrite'
import Base10Descomposition from './components/exercise/Base10Descomposition'
import PositionalSum from './components/exercise/PositionalSum'
import MatchNColumns from './components/exercise/MatchNColumns'
import DragAndDropSet from './components/exercise/DragAndDropSet'
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
import ChooseAnOptionNumToText from './components/exercise/chooseAnOptionNumToText'
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
          <Route path="/curso/:asinatureId" element={<CoursePresentation />} />
          <Route
            path="/curso/:asinatureId/unidad/:unitId"
            element={<UnitPresentation />}
          />

          {/* Rutas de test */}
          <Route
            path="/arrastrar-y-soltar-texto"
            element={<DragAndDropChoose />}
          />

          <Route
            path="/arrastrar-y-soltar-imagenes"
            element={<DragAndDropObjects typeCartesian="I" />}
          />

          <Route
            path="/seleccionar-puntos-en-el-plano-cartesiano"
            element={
              <SelectPointsCoordinatePlane
                coordinates={selectPointsCoordinatePlane}
              />
            }
          />

          <Route
            path="/verdadero-o-falso-images-en-el-plano-cartesiano"
            element={
              <TrueOrFalseCartesianImages
                type="I"
                data={dataCartesianPlaneImagesTrueOrFalse}
                length={10}
              />
            }
          />

          <Route
            path="/plano-cartesiano"
            element={<CartesianCoordinateFull pointNumbers={8} />}
          />
          <Route
            path="/verdadero-o-falso-plano-cartesiano"
            element={<TrueOrFalseCartesianCoord {...dataPointsToF} />}
          />
          <Route
            path="/verdadero-o-falso-numberos-texto"
            element={<TrueOrFalseNumbersAndText data={dataFigures} />}
          />
          <Route
            path="/cuadrante-plano-cartesiano"
            element={
              <CartesianCoordinateQuadrants
                pointNumbers={5}
                typeCartesian="III"
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
          <Route
            path="/escribe-puntos-plano-cartesiano"
            element={
              <WritePointsCartesianPlane points={objectCartesianPoints} />
            }
          />
          <Route
            path="/escoge-una-opcion-numero-a-texto"
            element={<ChooseAnOptionNumToText />}
          />
          <Route path="/verdadero-o-falso" element={<TrueOrFalse />} />
          <Route path="/elegir-una-opcion" element={<ChooseAnOption />} />
          <Route path="/ordenar-digitos" element={<OrderOneDigitNumbers />} />
          <Route
            path="/tabla-posicional"
            element={<PositionalTable data={dataPositionalTable} />}
          />
          <Route
            path="/escribir-el-valor-de-un-texto"
            element={<WriteValueFromText />}
          />
          <Route
            path="/escribe-el-numero-posicional"
            element={<WriteNumberPositional />}
          />

          <Route
            path="/opciones-en-seleccion"
            element={
              <SelectPlaceTableOption data={dataSelectPlaceTableOption} />
            }
          />

          <Route path="/escucha-y-escribe" element={<ListenAndWrite />} />
          <Route
            path="/descomposicion-base-10"
            element={<Base10Descomposition />}
          />
          <Route
            path="/suma-de-valores-posicionales"
            element={<PositionalSum />}
          />

          <Route path="/relaciona-columnas" element={<MatchNColumns />} />
          <Route
            path="/arrastrar-y-soltar-conjuntos"
            element={<DragAndDropSet />}
          />
          <Route path="/coloca-el-signo" element={<PlaceSign />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      {config.loading && <LoadingAllScreen />}
    </>
  )
}

export default App
