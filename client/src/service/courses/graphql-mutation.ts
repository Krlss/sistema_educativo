import { gql } from '@apollo/client'

export const CREATE_COURSE = gql`
  mutation CreateCourse($input: CreateCourseDTO!) {
    createCourse(input: $input) {
      id
      name
    }
  }
`

export const UPDATE_COURSE = gql`
  mutation UpdateCourse($input: UpdateCourseDTO!) {
    updateCourse(input: $input) {
      id
      name
    }
  }
`
