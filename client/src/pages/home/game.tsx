import { useEffect, useState } from 'react'
import {
  Base10Descomposition,
  CartesianCoordinateFull,
  CartesianCoordinateObjects,
  CartesianCoordinateQuadrants,
  ChooseAnOption,
  ChooseAnOptionNumToText,
  DragAndDropChooseText,
  DragAndDropObjects,
  DragAndDropSet,
  ListenAndWrite,
  MatchNColumns,
  OrderOneDigitNumbers,
  PlaceSign,
  PositionalSum,
  PositionalTable,
  SelectPlaceTableOption,
  SelectPointsCoordinatePlane,
  TrueOrFalse,
  TrueOrFalseCartesianCoord,
  TrueOrFalseCartesianImages,
  TrueOrFalseNumbersAndText,
  WriteNumberPositional,
  WritePointsCartesianPlane,
  WriteValueFromText
} from '../../components/exercise'
import { data } from '../../constants'

const Game = () => {
  const [dataGame, setDataGame] = useState<any[]>([])
  const [dataGameIndex, setDataGameIndex] = useState<number>(0)
  const loadExercise = () => {
    const array: any[] = []
    data.forEach((item, index) => {
      switch (item.type) {
        case 'base10_descomposition':
          return array.push(
            <Base10Descomposition key={index} {...item} index={index} />
          )
        case 'choose_an_option':
          return array.push(
            <ChooseAnOption key={index} {...item} index={index} />
          )
        case 'choose_an_option_textnumber':
          return array.push(
            <ChooseAnOptionNumToText key={index} {...item} index={index} />
          )
        case 'drag_and_drop_objects':
          return array.push(
            <DragAndDropObjects key={index} {...item} index={index} />
          )

        case 'drag_and_drop_sets':
          return array.push(
            <DragAndDropSet key={index} {...item} index={index} />
          )

        case 'drag_and_drop_text':
          return array.push(
            <DragAndDropChooseText key={index} {...item} index={index} />
          )

        case 'listen_numbers':
          return array.push(
            <ListenAndWrite key={index} {...item} index={index} />
          )

        case 'listen_text':
          return array.push(
            <ListenAndWrite key={index} {...item} index={index} />
          )

        case 'order':
          return array.push(
            <OrderOneDigitNumbers key={index} {...item} index={index} />
          )

        case 'order_max':
          return array.push(
            <OrderOneDigitNumbers key={index} {...item} index={index} />
          )

        case 'place_sign':
          return ''

        case 'positional_sum':
          return ''

        case 'positional_table':
          return ''

        case 'put_points_in_cp':
          return ''

        case 'select_place_table_option':
          return ''

        case 'selects_points_in_cp':
          return ''

        case 'true_or_false':
          return ''

        case 'true_or_false_cp':
          return ''

        case 'true_or_false_cp_objects':
          return ''

        case 'true_or_false_numbers_and_text':
          return ''

        case 'write_coor_cp':
          return ''

        case 'write_number_positional':
          return ''

        case 'write_points_cp':
          return ''

        case 'write_value_from_text':
          return ''
      }
    })

    setDataGame(array)
  }

  useEffect(() => {
    loadExercise()
  }, [])

  return (
    <>
      {dataGame[dataGameIndex]}
      <button
        className="p-4 bg-blue-500 text-white"
        onClick={() => {
          setDataGameIndex(dataGameIndex - 1)
        }}>
        anterior
      </button>
      <button
        className="p-4 bg-blue-500 text-white"
        onClick={() => {
          setDataGameIndex(dataGameIndex + 1)
        }}>
        Siguiente
      </button>
    </>
  )
}

export default Game
