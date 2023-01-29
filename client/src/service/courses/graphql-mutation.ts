import { gql } from '@apollo/client'

export const CREATE_COURSE = gql`
  mutation Mutation($data: courseCreateInput!) {
    createCourse(data: $data)
  }
`

export const UPDATE_COURSE = gql`
  mutation UpdateCourse($data: courseUpdateInput!, $updateCourseId: Float!) {
    updateCourse(data: $data, id: $updateCourseId)
  }
`
