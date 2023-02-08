import React, { useEffect, useState, useContext } from 'react'
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
} from '../components/exercise'
import { getQuadrant } from '../utils/CartesianCoordinate'
import { writePointsCoordinatePlane_, question } from '../types/game'
import { stripquotes } from '../utils'
import GeneralContext from '../contexts/context'
import {
  setDataQuestionLocalStore,
  getDataQuestionLocalStore,
  getDataSession
} from '../utils/dataSession'
import { QuestionsExtends } from '../types/contextGame'
import Swal from 'sweetalert2'
import { useParams, useNavigate } from 'react-router-dom'
import {
  useQualifyForUnit,
  useQuestionsByUnit,
  useQuestionByAsignature
} from '../service/game/custom-hook'

const useGame = () => {
  const {
    gameState,
    setIndex,
    setQuestions,
    setInitialGame,
    resetGame,
    setLoading,
    setNext,
    calculateQualification,
    user
  } = useContext(GeneralContext)

  const { asignatureId, unitId } = useParams<{
    asignatureId?: string
    unitId?: string
  }>()

  const navigate = useNavigate()
  const { handlerQualifyForUnit } = useQualifyForUnit()
  const { handleGetRandomQuestionsByUnit } = useQuestionsByUnit()
  const { handleGetRandomQuestionsByAsignature } = useQuestionByAsignature()

  const [nextDisabled, setNextDisabled] = useState(false)
  const [dataGame, setDataGame] = useState<question[]>([])
  const [renderDataGame, setRenderDataGame] = useState<React.ReactNode[]>([])

  const unitFind = user?.progress
    .find(item => item.id_asignature === asignatureId)
    ?.unit?.find(item => item.id_unit === unitId)

  if (unitFind?.finished) {
    navigate(`/asignatura/${asignatureId}`)
    Swal.fire({
      title: 'Unidad terminada',
      text: 'Ya has terminado esta unidad, puedes continuar con otra unidad',
      icon: 'info'
    })
  }
  if (!unitFind) {
    navigate('/')
    Swal.fire({
      title: 'Unidad no encontrada',
      text: 'No se ha encontrado la unidad, por favor selecciona otra unidad',
      icon: 'error'
    })
  }

  const loadExercise = () => {
    const array: any[] = []
    dataGame.forEach((item, index) => {
      switch (item.type) {
        case 'base10_descomposition':
          return array.push(
            <Base10Descomposition key={index} {...item} index={index} />
          )
        case 'choose_an_option':
          return array.push(
            <ChooseAnOption key={index} {...item} index={index} />
          )
        case 'operation_simple':
          return array.push(
            <OperationSimple key={index} {...item} index={index} />
          )
        case 'choose_any_option':
          return array.push(
            <ChooseAnyOption key={index} {...item} index={index} />
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
        case 'drag_and_drop_complete':
          return array.push(
            <DragAndDropComplete key={index} {...item} index={index} />
          )
        case 'table_multiplication':
          return array.push(
            <OperationBaseN key={index} {...item} index={index} />
          )
        case 'simple_multi':
          return array.push(<SimpleMulti key={index} {...item} index={index} />)

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
        case 'positional_rest':
          return array.push(
            <PositionalRest key={index} {...item} index={index} />
          )
        case 'positional_mult':
          return array.push(
            <PositionalMult key={index} {...item} index={index} />
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

    setRenderDataGame(array)
    const existQuestions = getDataQuestionLocalStore('questionsAswers')
    let questions_: QuestionsExtends[] = []
    if (!existQuestions) {
      questions_ = dataGame.map(item => ({
        id: item.id,
        nota: 0,
        isDone: false
      })) as {
        id: string
        nota: number
        isDone: boolean
      }[]
      setDataQuestionLocalStore('questionsAswers', questions_)
    } else {
      questions_ = existQuestions
    }
    setQuestions(questions_)
    const localStorageDataGame = getDataQuestionLocalStore('dataGame')
    setDataQuestionLocalStore('dataGame', localStorageDataGame || array)
  }

  const nextExercise = () => {
    setDataQuestionLocalStore('questionsAswers', gameState.questions)
    setDataQuestionLocalStore('dataGame', dataGame)
    if (gameState.timeLeft > 0) {
      if (gameState.next && gameState.index <= dataGame.length - 1) {
        setIndex(gameState.index + 1)
        setNext(false)
      }

      if (gameState.index <= dataGame.length - 1 && !gameState.next) {
        calculateQualification()
        setNext(true)
        if (
          gameState.questions[gameState.index].isDone &&
          gameState.questions[gameState.index].nota > 0 &&
          gameState.questions[gameState.index].nota < 1
        ) {
          Swal.fire({
            title: 'Felcidades',
            text: 'Tuviste algunos aciertos',
            icon: 'success'
          })
        } else if (
          gameState.questions[gameState.index].isDone &&
          gameState.questions[gameState.index].nota > 0
        ) {
          Swal.fire({
            title: 'Felicidades',
            text: 'Respondiste correctamente',
            icon: 'success'
          })
        } else {
          Swal.fire({
            title: 'Lo sentimos',
            text: 'No respondiste correctamente',
            icon: 'error'
          })
        }
      }

      if (gameState.index === dataGame.length - 1 && gameState.next) {
        Swal.fire({
          title: 'Terminaste la prueba',
          text: 'Tus respuestas serán guardadas',
          icon: 'success'
        })
        resetGame()

        if (asignatureId && unitId) {
          const progressId_ = user.progress.find(
            item => item.id_asignature === asignatureId
          )?.id

          handlerQualifyForUnit({
            data: JSON.stringify(gameState.questions),
            unitId,
            progressId: progressId_,
            userId: user.id,
            nota: gameState.qualification
          })
        }

        navigate('/')
      }
    }
  }

  useEffect(() => {
    setLoading(true)
    const initialTimeStamp = getDataSession('initialTimeStamp') as Date | null
    if (!initialTimeStamp) {
      if (asignatureId && unitId) {
        handleGetRandomQuestionsByUnit({
          asignatureId,
          unitId,
          setDataGame
        })
      }
      if (asignatureId && !unitId) {
        handleGetRandomQuestionsByAsignature({
          asignatureId,
          setDataGame
        })
      }
      setLoading(false)
      return
    }

    const questiongame_ = getDataQuestionLocalStore('questionsAswers') as
      | QuestionsExtends[]
      | null

    if (questiongame_) {
      const questionDoneLength = questiongame_.filter(
        item => item.isDone
      ).length

      if (questionDoneLength >= questiongame_.length) {
        Swal.fire({
          title: 'Terminaste la prueba',
          text: 'Tus respuestas serán guardadas',
          icon: 'success'
        })
        resetGame()
        navigate('/')
        return
      }

      setIndex(questionDoneLength)
      setNext(false)
    }

    const localStorageDataGame = getDataQuestionLocalStore('dataGame')
    const localStorageDataGame_ = localStorageDataGame || []
    setDataGame(localStorageDataGame_)
    setDataQuestionLocalStore('dataGame', localStorageDataGame_)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (dataGame.length > 0) {
      loadExercise()
      setInitialGame()
    }
  }, [dataGame])

  useEffect(() => {
    if (gameState.questions.length > 0) {
      const isCalificate = gameState.questions.some(
        (question: QuestionsExtends) => question.isDone
      )

      if (isCalificate) calculateQualification()
    }
  }, [gameState.questions.length])

  useEffect(() => {
    if (gameState.questions[gameState.index]?.isDone) setNextDisabled(true)
    else setNextDisabled(false)
  }, [gameState.questions[gameState.index]])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [gameState.index])

  return {
    gameState,
    nextExercise,
    nextDisabled,
    renderDataGame,
    dataGame
  }
}

export default useGame
