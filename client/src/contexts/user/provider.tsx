import { useReducer } from 'react'
import { InitialState } from './initialState'
import UserReducer from './reducer'
import UserContext from './context'
import { USER } from '../../types/ContextUser'

const UserProvider = (props: any) => {
  const [state, dispatch] = useReducer(UserReducer, InitialState)

  const setUser = (user: USER) => {
    dispatch({
      type: 'setUser',
      payload: user
    })
  }

  return (
    <UserContext.Provider
      value={{
        state,
        setUser
      }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
