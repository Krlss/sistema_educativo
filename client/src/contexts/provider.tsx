import { useReducer, useEffect } from 'react'
import { InitialStateUser } from './user/initialState'
import { InitialStateConfig } from './config/initialState'
import UserReducer from './user/reducer'
import GeneralContext from './context'
import ConfigReducer from './config/reducer'
import { USER } from '../types/ContextUser'
import { ASIGNATURE } from '../types/ContextAsignature'
import GameReducer from './game/reducer'
import { InitialStateGame } from './game/initialState'
import { QuestionsExtends } from '../types/contextGame'
import { useLogout } from '../service/user/custom-hook'
import { getAsignaturesProps } from '../service/asignatures/custom-hook'
import { useGetUserProgress } from '../service/progress/custom-hook'
import {
  getDataSession,
  removeDataSession,
  setDataTest,
  setDataQuestionLocalStore,
  getDataQuestionLocalStore,
  removeQuestionLocalStore
} from '../utils/dataSession'
import { diffMinutes } from '../utils'
import Swal from 'sweetalert2'
import { question } from '../types/game'
import jwtDecode from 'jwt-decode'
import { useLocation } from 'react-router-dom'
import {
  useQualifyForAsignature,
  useQualifyForUnit
} from '../service/game/custom-hook'

const GeneralProvider = (props: any) => {
  const [user, dispatchUser] = useReducer(UserReducer, InitialStateUser)
  const [config, dispatchConfig] = useReducer(ConfigReducer, InitialStateConfig)
  const [gameState, dispatchGame] = useReducer(GameReducer, InitialStateGame)
  const { handleGetUserProgress } = useGetUserProgress({ dispatchUser })
  const { handleLogout } = useLogout()
  const location = useLocation()
  const { handlerQualifyForUnit } = useQualifyForUnit()
  const { handlerQualifyForAsignature } = useQualifyForAsignature()

  useEffect(() => {
    const initialTimeStamp = getDataSession('initialTimeStamp')
    if (initialTimeStamp) {
      setInitialGame()
    }
  }, [])

  useEffect(() => {
    const rt = getDataSession('rt')
    if (rt) {
      const user_ = jwtDecode<USER>(rt)
      dispatchUser({ type: 'setUser', payload: user_ })
      handleGetUserProgress({
        userId: user_.id
      })
    }
  }, [getDataSession('rt')])

  const setIsLogged = (isLogged: boolean) => {
    dispatchUser({ type: 'setIsLogged', payload: isLogged })
  }

  const setNext = (next: boolean) => {
    dispatchGame({ type: 'setNext', payload: next })
  }

  const setQuestion = (question: QuestionsExtends) => {
    if (location.pathname.includes('prueba'))
      dispatchGame({ type: 'addQuestion', payload: question })
  }

  const setQuestions = (questions: QuestionsExtends[]) => {
    dispatchGame({ type: 'setQuestions', payload: questions })
  }

  const removeQuestion = (id: string) => {
    dispatchGame({ type: 'removeQuestion', payload: id })
  }

  const updatedQuestion = (question: QuestionsExtends) => {
    if (location.pathname.includes('prueba'))
      dispatchGame({ type: 'updatedQuestion', payload: question })
  }

  const setIndex = (index: number) => {
    dispatchGame({ type: 'setIndex', payload: index })
  }

  const setUser = (user: USER) => {
    dispatchUser({
      type: 'setUser',
      payload: user
    })
  }

  /* const setAsignatures = (asignatures: ASIGNATURE[]) => {
    dispatchConfig({
      type: 'setAsignatures',
      payload: asignatures
    })
  }*/

  const setLoading = (loading: boolean) => {
    dispatchConfig({
      type: 'setLoading',
      payload: loading
    })
  }

  const logout = () => {
    handleLogout()
    removeDataSession('rt')
    dispatchUser({
      type: 'resetUser',
      payload: undefined
    })
  }

  const isThisRol = (findRol: string[]) => {
    const { roles } = user
    return roles.some(rol => findRol.includes(rol.name))
  }

  const lessTime = () => {
    const questionsId = getDataSession('questionsId')
    const initialTimeStamp = getDataSession('initialTimeStamp') as Date | null
    if (initialTimeStamp) {
      const diff = diffMinutes(initialTimeStamp)
      if (diff) {
        setTimeout(() => {
          dispatchGame({
            type: 'restTime',
            payload: undefined
          })
        }, 1000)
      } else {
        Swal.fire({
          title: 'Se acabo el tiempo',
          text: 'Tus respuestas serán guardadas',
          icon: 'warning'
        }).then(() => {
          if (questionsId?.asignatureId && questionsId?.unitId) {
            handlerQualifyForUnit({
              questions: JSON.stringify(gameState.questions),
              unitId: questionsId?.unitId,
              asignatureId: questionsId?.asignatureId,
              userId: user.id,
              nota: gameState.qualification
            })
          } else if (questionsId?.asignatureId && !questionsId?.unitId) {
            handlerQualifyForAsignature({
              questions: JSON.stringify(gameState.questions),
              asignatureId: questionsId?.asignatureId,
              userId: user.id,
              nota: gameState.qualification
            })
          }
          resetGame()
        })
      }
    }
  }

  useEffect(() => {
    if (gameState.timeLeft) lessTime()
  }, [gameState.timeLeft])

  const resetGame = () => {
    removeDataSession('initialTimeStamp')
    removeDataSession('questionsId')
    removeQuestionLocalStore('dataGame')
    removeQuestionLocalStore('questionsAswers')
    dispatchGame({
      type: 'resetGame',
      payload: undefined
    })
  }

  const setInitialGame = () => {
    const initialTimeStamp = getDataSession('initialTimeStamp') as Date | null

    if (initialTimeStamp) {
      const diff = diffMinutes(initialTimeStamp)
      const finalTimeStamp = new Date(initialTimeStamp)
      finalTimeStamp.setMinutes(finalTimeStamp.getMinutes() + 59)
      if (diff) {
        const timeLeft = Math.floor(
          (finalTimeStamp.getTime() - new Date().getTime()) / 1000
        )
        dispatchGame({
          type: 'setInitialGame',
          payload: {
            initialTimeStamp,
            finalTimeStamp,
            timeLeft
          }
        })
      }
      // aaqui va un else alert('Se acabo el tiempo')
    } else {
      setDataTest('initialTimeStamp', new Date())
      const initialTimeStamp = new Date()
      const finalTimeStamp = new Date(initialTimeStamp)
      finalTimeStamp.setMinutes(finalTimeStamp.getMinutes() + 59)
      dispatchGame({
        type: 'setInitialGame',
        payload: {
          initialTimeStamp,
          finalTimeStamp,
          timeLeft: 3599
        }
      })
    }
  }

  const calculateQualification = () => {
    const qualification = gameState.questions.reduce(
      (acc, item) => acc + item.nota,
      0
    )

    // qualification max is 10, qualification / 30 * 10
    const qualificationFinal = (qualification * 10) / gameState.questions.length

    dispatchGame({
      type: 'setQualification',
      payload: qualificationFinal
    })
  }

  return (
    <GeneralContext.Provider
      value={{
        user,
        setUser,
        logout,
        setLoading,
        config,
        setQuestion,
        setQuestions,
        removeQuestion,
        updatedQuestion,
        setIndex,
        gameState,
        setInitialGame,
        resetGame,
        setNext,
        calculateQualification,
        setIsLogged,
        isThisRol
      }}>
      {props.children}
    </GeneralContext.Provider>
  )
}

export default GeneralProvider
