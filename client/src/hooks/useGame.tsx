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
  WriteValueFromText,
  ChooseAnyOption
} from '../components/exercise'
import { getQuadrant } from '../utils/CartesianCoordinate'
import {
  writePointsCoordinatePlane_,
  typeQuestion,
  getRandomQuestionsByAsignatures,
  question,
  getRandomQuestionsProps
} from '../types/game'
import { stripquotes } from '../utils'
import GeneralContext from '../contexts/context'
import {
  setDataTest,
  setDataQuestionLocalStore,
  getDataQuestionLocalStore,
  getDataSession
} from '../utils/dataSession'
import { QuestionsExtends } from '../types/contextGame'
import Swal from 'sweetalert2'
import { useLazyQuery } from '@apollo/client'
import {
  QUESTIONS_BY_UNIT,
  QUESTIONS_BY_ASIGNATURE
} from '../service/game/graphql-queries'
import { useParams, useNavigate } from 'react-router-dom'
import { data } from '../constants'

const useGame = () => {
  const {
    gameState,
    setIndex,
    setQuestions,
    setInitialGame,
    resetGame,
    setLoading
  } = useContext(GeneralContext)

  const { asignatureId, unitId } = useParams<{
    asignatureId?: string
    unitId?: string
  }>()

  const navigate = useNavigate()

  const [dataGame, setDataGame] = useState<any[]>([])
  const [questions, setQuestions_] = useState<question[]>([])

  const [nextDisabled, setNextDisabled] = useState(false)

  const loadExercise = () => {
    const array: any[] = []
    questions.forEach((item, index) => {
      switch (item.type) {
        case 'base10_descomposition':
          return array.push(
            <Base10Descomposition key={index} {...item} index={index} />
          )
        case 'choose_an_option':
          return array.push(
            <ChooseAnOption key={index} {...item} index={index} />
          )
        case 'choose_any_option':
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
    const existQuestions = getDataQuestionLocalStore('questions')
    var questions_: QuestionsExtends[] = []
    if (!existQuestions) {
      questions_ = questions.map(item => ({
        _id: item._id,
        nota: 0,
        isDone: false
      })) as {
        _id: string
        nota: number
        isDone: boolean
      }[]
    } else {
      questions_ = existQuestions
    }
    setQuestions(questions_)
    localStorage.setItem('array', JSON.stringify(array))
  }

  const nextExercise = () => {
    if (gameState.timeLeft > 0) {
      if (gameState.index === dataGame.length - 1) {
        Swal.fire({
          title: 'Terminaste la prueba',
          text: 'Tus respuestas serán guardadas',
          icon: 'success'
        }).then(() => {
          resetGame()
          window.location.reload()
        })
      }
      if (gameState.index < dataGame.length - 1) {
        setDataTest('indexQuestion', gameState.index + 1)
        setDataQuestionLocalStore('questions', gameState.questions)
        setIndex(gameState.index + 1)
      }
    }
  }

  const [getRandomQuestions] =
    useLazyQuery<getRandomQuestionsProps>(QUESTIONS_BY_UNIT)

  const [getRandomQuestionsByAsignatures] =
    useLazyQuery<getRandomQuestionsByAsignatures>(QUESTIONS_BY_ASIGNATURE)

  useEffect(() => {
    setLoading(true)
    const initialTimeStamp = getDataSession('initialTimeStamp') as Date | null
    if (!initialTimeStamp) {
      if (asignatureId && unitId) {
        handleGetRandomQuestionsByUnit()
      }
      if (asignatureId && !unitId) {
        handleGetRandomQuestionsByAsignature()
      }
      setLoading(false)
      return
    }
    /* if (!asignatureId && !unitId) {
      const data_ = data as question[]
      setQuestions_(data_)
      setLoading(false)
      return
    } */
    const localStorageQuestion = localStorage.getItem('array')
    const questions_ = localStorageQuestion
      ? JSON.parse(localStorageQuestion)
      : []
    setDataGame(questions_)
    setLoading(false)
  }, [])

  const handleGetRandomQuestionsByUnit = () => {
    setDataTest('questionsId', {
      asignatureId,
      unitId
    })
    getRandomQuestions({
      variables: {
        asignatureId,
        unitId
      },
      onCompleted(data) {
        if (data.getRandomQuestions) {
          setQuestions_(data.getRandomQuestions)
        }
      },
      onError() {
        navigate('/')
      }
    })
  }

  const handleGetRandomQuestionsByAsignature = () => {
    setDataTest('questionsId', {
      asignatureId
    })
    getRandomQuestionsByAsignatures({
      variables: {
        asignatureId
      },
      onCompleted(data) {
        if (data.getRandomQuestionsByAsignatures) {
          setQuestions_(data.getRandomQuestionsByAsignatures)
        }
      },
      onError() {
        navigate('/')
      }
    })
  }

  useEffect(() => {
    if (questions.length > 0) {
      loadExercise()
      setInitialGame()
    }
  }, [questions])

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
    nextExercise,
    nextDisabled
  }
}

export default useGame
