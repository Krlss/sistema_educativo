import Cookie from 'universal-cookie'

export const setCookie = (key: string, value: any) => {
  const cookie = new Cookie()
  cookie.set(key, value, { path: '/' })
}

export const getCookie = (key: string) => {
  const cookie = new Cookie()
  return cookie.get(key)
}

export const removeCookie = (key: string) => {
  const cookie = new Cookie()
  cookie.remove(key, { path: '/' })
}
