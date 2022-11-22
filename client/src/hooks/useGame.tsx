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
} from '../components/exercise'
import { getQuadrant } from '../utils/CartesianCoordinate'
import { writePointsCoordinatePlane_, typeQuestion } from '../types/game'
import { stripquotes } from '../utils'

const useGame = (
  data: {
    _id: string
    options: string
    title: string
    type: typeQuestion
    subtitle: string | null
  }[]
) => {
  const [dataGame, setDataGame] = useState<any[]>([])
  const [timer, setTimer] = useState(5400)
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
          return array.push(<PlaceSign key={index} {...item} index={index} />)

        case 'positional_sum':
          return array.push(
            <PositionalSum key={index} {...item} index={index} />
          )

        case 'positional_table':
          return array.push(
            <PositionalTable key={index} {...item} index={index} />
          )

        case 'put_points_in_cp':
          const optionsPutPointsInCp = stripquotes(
            item.options
          ) as writePointsCoordinatePlane_[]
          const typeOptionsPutPointsInCp = getQuadrant(optionsPutPointsInCp)

          if (typeOptionsPutPointsInCp === '0') {
            return array.push(
              <CartesianCoordinateFull key={index} {...item} index={index} />
            )
          } else {
            return array.push(
              <CartesianCoordinateQuadrants
                key={index}
                {...item}
                index={index}
              />
            )
          }

        case 'select_place_table_option':
          return array.push(
            <SelectPlaceTableOption key={index} {...item} index={index} />
          )

        case 'selects_points_in_cp':
          return array.push(
            <SelectPointsCoordinatePlane key={index} {...item} index={index} />
          )

        case 'true_or_false':
          return array.push(<TrueOrFalse key={index} {...item} index={index} />)

        case 'true_or_false_cp':
          return array.push(
            <TrueOrFalseCartesianCoord key={index} {...item} index={index} />
          )

        case 'true_or_false_cp_objects':
          return array.push(
            <TrueOrFalseCartesianImages key={index} {...item} index={index} />
          )

        case 'true_or_false_numbers_and_text':
          return array.push(
            <TrueOrFalseNumbersAndText key={index} {...item} index={index} />
          )

        case 'write_coor_cp':
          const optionsWriteCoorCp = stripquotes(
            item.options
          ) as writePointsCoordinatePlane_[]
          const typeWriteCoorCp = getQuadrant(optionsWriteCoorCp)

          if (typeWriteCoorCp === '0') {
            return array.push(
              <WritePointsCartesianPlane key={index} {...item} index={index} />
            )
          } else {
            return array.push(
              <CartesianCoordinateObjects key={index} {...item} index={index} />
            )
          }

        case 'write_number_positional':
          return array.push(
            <WriteNumberPositional key={index} {...item} index={index} />
          )

        case 'write_value_from_text':
          return array.push(
            <WriteValueFromText key={index} {...item} index={index} />
          )
      }
    })

    setDataGame(array)
  }

  useEffect(() => {
    loadExercise()
  }, [])

  useEffect(() => {
    if (timer === 0) {
      alert('Se acabo el tiempo')
    } else {
      setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    }
  }, [timer])

  return { dataGame, dataGameIndex, setDataGameIndex, timer }
}

export default useGame
