import { object } from 'yup'

import {
  email,
  password,
  firstname,
  lastname,
  passwordRegex,
  username
} from './validations'

export const loginValidationSchema = object().shape({
  email,
  password
})

export const registerValidationSchema = object().shape({
  firstname,
  lastname,
  username,
  email,
  password: passwordRegex
})
