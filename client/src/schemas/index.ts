import { object } from 'yup'

import { email, password, name, lastName, passwordRegex } from './validations'

export const loginValidationSchema = object().shape({
  email,
  password
})

export const registerValidationSchema = object().shape({
  name,
  lastName,
  email,
  password: passwordRegex
})
