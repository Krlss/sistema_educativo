import { createContext } from 'react'
import { USER } from '../../types/ContextUser'

export type UserPropsContext = {
  state: USER
  setUser: (user: USER) => void
}

const UserContext = createContext<UserPropsContext>({} as UserPropsContext)

export default UserContext
