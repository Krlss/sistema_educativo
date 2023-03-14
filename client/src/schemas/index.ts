import { object } from 'yup'

import {
  email,
  password,
  name,
  lastName,
  passwordRegex,
  description,
  image
} from './validations'

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

export const registerCourseValidationSchema = object().shape({
  name
})

export const registerAsignatureValidationSchema = object().shape({
  name,
  description,
  image
})
