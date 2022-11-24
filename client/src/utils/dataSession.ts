import Cookie from 'universal-cookie'
import { USER } from '../types/ContextUser'

export const setDataSession = (key: string, value: USER) => {
  const cookie = new Cookie()
  const { progress, ...other } = value
  cookie.set(
    key,
    { ...other },
    {
      path: '/'
    }
  )
}

export const getDataSession = (key: string) => {
  const cookie = new Cookie()
  return cookie.get(key)
}

export const removeDataSession = (key: string) => {
  const cookie = new Cookie()
  cookie.remove(key, { path: '/' })
}

export const setDataTest = (key: string, value: any) => {
  const cookie = new Cookie()
  cookie.set(key, value, {
    path: '/'
  })
}
