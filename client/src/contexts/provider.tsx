import { useReducer, useEffect } from 'react'
import { InitialStateUser } from './user/initialState'
import { InitialStateConfig } from './config/initialState'
import UserReducer from './user/reducer'
import GeneralContext from './context'
import ConfigReducer from './config/reducer'
import { USER } from '../types/ContextUser'
import { ASIGNATURE } from '../types/ContextAsignature'
import {
  useGetAsignatures,
  getAsignaturesProps
} from '../service/asignatures/custom-hook'
import { useGetUserProgress } from '../service/progress/custom-hook'
import { getDataSession } from '../utils/dataSession'

const GeneralProvider = (props: any) => {
  const [user, dispatchUser] = useReducer(UserReducer, InitialStateUser)
  const [config, dispatchConfig] = useReducer(ConfigReducer, InitialStateConfig)
  const { getAsignatures } = useGetAsignatures()
  const { handleGetUserProgress, data } = useGetUserProgress()
  useEffect(() => {
    const token = getDataSession('token')
    if (token) {
      dispatchUser({ type: 'setUser', payload: token })
      handleGetUserProgress({
        userId: token._id
      })
      dispatchUser({
        type: 'setUserProgress',
        payload: data?.getUserProgress
      })
    }
  }, [])

  console.log(user)

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
        config
      }}>
      {props.children}
    </GeneralContext.Provider>
  )
}

export default GeneralProvider
