import useClassPresentation from '../../hooks/useClassPresentation'
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
  WriteValueFromText,
  ChooseAnyOption,
  PositionalRest,
  DragAndDropComplete,
  PositionalMult,
  OperationBaseN,
  SimpleMulti,
  OperationSimple
} from '../../components/exercise'
import { stripquotes } from '../../utils'
import { writePointsCoordinatePlane_ } from '../../types/game'
import { getQuadrant } from '../../utils/CartesianCoordinate'
import { question } from '../../types/game'
import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ClassPresentation = () => {
  const { descriptionIsImage, topic, renderGame, setRenderGame } =
    useClassPresentation()

  const loadExercise = (dataGame: question[]) => {
    const array: ReactNode[] = []
    dataGame.forEach((item, index) => {
      switch (item.type) {
        case 'base10_descomposition':
          return array.push(<Base10Descomposition key={index} {...item} />)
        case 'choose_an_option':
          return array.push(<ChooseAnOption key={index} {...item} />)
        case 'operation_simple':
          return array.push(<OperationSimple key={index} {...item} />)
        case 'choose_any_option':
          return array.push(<ChooseAnyOption key={index} {...item} />)
        case 'choose_an_option_textnumber':
          return array.push(<ChooseAnOptionNumToText key={index} {...item} />)
        case 'drag_and_drop_objects':
          return array.push(<DragAndDropObjects key={index} {...item} />)

        case 'drag_and_drop_sets':
          return array.push(<DragAndDropSet key={index} {...item} />)

        case 'drag_and_drop_text':
          return array.push(<DragAndDropChooseText key={index} {...item} />)
        case 'drag_and_drop_complete':
          return array.push(<DragAndDropComplete key={index} {...item} />)
        case 'table_multiplication':
          return array.push(<OperationBaseN key={index} {...item} />)
        case 'simple_multi':
          return array.push(<SimpleMulti key={index} {...item} />)

        case 'listen_numbers':
          return array.push(<ListenAndWrite key={index} {...item} />)

        case 'listen_text':
          return array.push(<ListenAndWrite key={index} {...item} />)

        case 'order':
          return array.push(<OrderOneDigitNumbers key={index} {...item} />)

        case 'place_sign':
          return array.push(<PlaceSign key={index} {...item} />)

        case 'positional_sum':
          return array.push(<PositionalSum key={index} {...item} />)
        case 'positional_rest':
          return array.push(<PositionalRest key={index} {...item} />)
        case 'positional_mult':
          return array.push(<PositionalMult key={index} {...item} />)
        case 'positional_table':
          return array.push(<PositionalTable key={index} {...item} />)

        case 'put_points_in_cp':
          const optionsPutPointsInCp = stripquotes(
            item.options
          ) as writePointsCoordinatePlane_[]
          const typeOptionsPutPointsInCp = getQuadrant(optionsPutPointsInCp)

          if (typeOptionsPutPointsInCp === '0') {
            return array.push(<CartesianCoordinateFull key={index} {...item} />)
          } else {
            return array.push(
              <CartesianCoordinateQuadrants key={index} {...item} />
            )
          }

        case 'select_place_table_option':
          return array.push(<SelectPlaceTableOption key={index} {...item} />)

        case 'selects_points_in_cp':
          return array.push(
            <SelectPointsCoordinatePlane key={index} {...item} />
          )

        case 'true_or_false':
          return array.push(<TrueOrFalse key={index} {...item} />)

        case 'true_or_false_cp':
          return array.push(<TrueOrFalseCartesianCoord key={index} {...item} />)

        case 'true_or_false_cp_objects':
          return array.push(
            <TrueOrFalseCartesianImages key={index} {...item} />
          )

        case 'true_or_false_numbers_and_text':
          return array.push(<TrueOrFalseNumbersAndText key={index} {...item} />)

        case 'write_coor_cp':
          const optionsWriteCoorCp = stripquotes(
            item.options
          ) as writePointsCoordinatePlane_[]
          const typeWriteCoorCp = getQuadrant(optionsWriteCoorCp)

          if (typeWriteCoorCp === '0') {
            return array.push(
              <WritePointsCartesianPlane key={index} {...item} />
            )
          } else {
            return array.push(
              <CartesianCoordinateObjects key={index} {...item} />
            )
          }

        case 'write_number_positional':
          return array.push(<WriteNumberPositional key={index} {...item} />)

        case 'write_value_from_text':
          return array.push(<WriteValueFromText key={index} {...item} />)
      }
    })
    setRenderGame(array)
  }

  const navigate = useNavigate()

  useEffect(() => {
    if (topic?.question) {
      loadExercise([topic.question])
    }
  }, [topic])

  return (
    <div>
      <button
        className="bg-yellow-page py-2 px-4 rounded-lg font-medium my-2"
        onClick={() => navigate(-1)}>
        Volver atrás
      </button>
      <div
        className={`${
          topic?.question
            ? 'grid md:grid-cols-3 items-start grid-cols-1 gap-2'
            : 'flex items-center justify-center'
        }`}>
        {topic?.question ? (
          <div className={`${topic?.question ? 'col-span-2' : ''}`}>
            {renderGame[0]}
          </div>
        ) : null}
        {topic?.video && (
          <div className="relative w-full md:max-w-md h-[350px] md:h-[200px] lg:h-[350px]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={topic.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
      {descriptionIsImage && (
        <img src={topic?.image} width="100%" className="mt-6" />
      )}
    </div>
  )
}

export default ClassPresentation
