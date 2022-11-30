import { useEffect, useState, useContext } from 'react'
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
import { getQuadrant } from '../utils/cartesianCoordinate'
import { writePointsCoordinatePlane_, typeQuestion } from '../types/game'
import { stripquotes } from '../utils'
import {
  setDataTest,
  getDataSession,
  removeDataSession
} from '../utils/dataSession'
import GeneralContext from '../contexts/context'

const useGame = (
  data: {
    _id: string
    options: string
    title: string
    type: typeQuestion
    subtitle: string | null
  }[]
) => {
  const { gameState, setIndex, setQuestions } = useContext(GeneralContext)
  const [dataGame, setDataGame] = useState<any[]>([])
  const [timer, setTimer] = useState(getDataSession('test')?.timer ?? 3599)

  const [nextDisabled, setNextDisabled] = useState(false)

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

    const questions = data.map(item => ({
      _id: item._id,
      nota: 0,
      isDone: false
    })) as {
      _id: string
      nota: number
      isDone: boolean
    }[]
    setQuestions(questions)
  }

  const nextExercise = () => {
    if (timer > 0) {
      if (gameState.index === dataGame.length - 1) {
        alert('Terminaste el juego')
        setIndex(0)
      }
      if (gameState.index < dataGame.length - 1) {
        setIndex(gameState.index + 1)
      }
    }
  }

  /* useEffect(() => {
    if (timer === 0) {
      removeDataSession('test')
      alert('Se acabo el tiempo')
    } else {
      setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    }
    setDataTest('test', { dataGameIndex, timer })
  }, [timer]) */

  useEffect(() => {
    const data = getDataSession('test')
    if (data?.timer === 0) {
      removeDataSession('test')
      setTimer(3599)
    }

    loadExercise()
    const handleTabClose = (event: any) => {
      event.preventDefault()
      return (event.returnValue = '')
    }

    window.addEventListener('beforeunload', handleTabClose)
  }, [])

  useEffect(() => {
    if (gameState.questions[gameState.index]?.isDone) setNextDisabled(true)
    else setNextDisabled(false)
  }, [gameState])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [gameState.index])

  console.log(gameState.questions)

  return {
    dataGame,
    gameState,
    timer,
    nextExercise,
    nextDisabled
  }
}

export default useGame
