import { useReducer } from 'react'
import { InitialState } from './initialState'
import AsignatureReducer from './reducer'
import AsignatureContext from './context'
import { ASIGNATURE } from '../../types/ContextAsignature'

const UserProvider = (props: any) => {
  const [state, dispatch] = useReducer(AsignatureReducer, InitialState)

  const setAsignature = (asignature: ASIGNATURE) => {
    dispatch({
      type: 'setAsignature',
      payload: asignature
    })
  }

  return (
    <AsignatureContext.Provider
      value={{
        state,
        setAsignature
      }}>
      {props.children}
    </AsignatureContext.Provider>
  )
}

export default UserProvider
