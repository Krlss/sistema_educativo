import { useReducer, useEffect } from 'react'
import { InitialStateUser } from './user/initialState'
import { InitialStateConfig } from './config/initialState'
import UserReducer from './user/reducer'
import GeneralContext from './context'
import ConfigReducer from './config/reducer'
import { USER } from '../types/contextUser'
import { ASIGNATURE } from '../types/ContextAsignature'
import GameReducer from './game/reducer'
import { InitialStateGame } from './game/initialState'
import { QuestionsExtends } from '../types/contextGame'

import {
  useGetAsignatures,
  getAsignaturesProps
} from '../service/asignatures/custom-hook'
import { useGetUserProgress } from '../service/progress/custom-hook'
import { getDataSession } from '../utils/dataSession'

const GeneralProvider = (props: any) => {
  const [user, dispatchUser] = useReducer(UserReducer, InitialStateUser)
  const [config, dispatchConfig] = useReducer(ConfigReducer, InitialStateConfig)
  const [gameState, dispatchGame] = useReducer(GameReducer, InitialStateGame)
  const { getAsignatures } = useGetAsignatures()
  const { handleGetUserProgress } = useGetUserProgress({ dispatchUser })
  useEffect(() => {
    const token = getDataSession('token')
    if (token) {
      dispatchUser({ type: 'setUser', payload: token })
      handleGetUserProgress({
        userId: token._id
      })
    }
  }, [])

  useEffect(() => {
    if (user.isLogged) {
      getAsignatures({
        onCompleted(data: getAsignaturesProps) {
          dispatchConfig({
            type: 'setAsignatures',
            payload: data.getAsignatures
          })
        }
      })
    }
  }, [user.isLogged])

  const setQuestion = (question: QuestionsExtends) => {
    dispatchGame({ type: 'addQuestion', payload: question })
  }

  const setQuestions = (questions: QuestionsExtends[]) => {
    dispatchGame({ type: 'setQuestions', payload: questions })
  }

  const removeQuestion = (_id: string) => {
    dispatchGame({ type: 'removeQuestion', payload: _id })
  }

  const updatedQuestion = (question: QuestionsExtends) => {
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

  const setAsignatures = (asignatures: ASIGNATURE[]) => {
    dispatchConfig({
      type: 'setAsignatures',
      payload: asignatures
    })
  }

  const setLoading = (loading: boolean) => {
    dispatchConfig({
      type: 'setLoading',
      payload: loading
    })
  }

  const logout = () => {
    dispatchUser({
      type: 'resetUser',
      payload: undefined
    })
  }

  return (
    <GeneralContext.Provider
      value={{
        user,
        setUser,
        logout,
        setAsignatures,
        setLoading,
        config,
        setQuestion,
        setQuestions,
        removeQuestion,
        updatedQuestion,
        setIndex,
        gameState
      }}>
      {props.children}
    </GeneralContext.Provider>
  )
}

export default GeneralProvider
