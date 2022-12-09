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

export const setDataQuestionLocalStore = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getDataQuestionLocalStore = (key: string) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

export const removeQuestionLocalStore = (key: string) => {
  localStorage.removeItem(key)
}
