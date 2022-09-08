import * as yup from 'yup'
import { lowercase, number, uppercase } from '../constants/regex'

export const password = yup
  .string()
  .min(6, 'La contraseña es muy corta')
  .max(50, 'La contraseña es muy larga')
  .required('La contraseña es requerida')

export const email = yup
  .string()
  .email('El correo electrónico no es válido')
  .max(100, 'El correo electrónico es muy largo')
  .required('El correo electrónico es requerido')

export const firstname = yup
  .string()
  .min(2, 'El nombre es muy corto')
  .max(50, 'El nombre es muy largo')
  .required('El nombre es requerido')

export const lastname = yup
  .string()
  .min(2, 'El apellido es muy corto')
  .max(50, 'El apellido es muy largo')
  .required('El apellido es requerido')

export const username = yup
  .string()
  .min(2, 'El nombre de usuario es muy corto')
  .max(50, 'El nombre de usuario es muy largo')
  .required('El nombre de usuario es requerido')

export const passwordRegex = password
  .matches(lowercase, 'La contraseña debe tener al menos una letra minúscula')
  .matches(uppercase, 'La contraseña debe tener al menos una letra mayúscula')
  .matches(number, 'La contraseña debe tener al menos un número')
