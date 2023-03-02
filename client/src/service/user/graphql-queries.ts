import { gql } from '@apollo/client'

export const LOGIN = gql`
  query Query($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

export const GET_USER = gql`
  query User($userId: String!) {
    user(id: $userId) {
      id
      email
      name
      lastName
      roles {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`

export const GETSTUDENTS = gql`
  query Query {
    students {
      name
      lastName
      email
      value: id
      label: email
      progress {
        pca: periodCourseAsignature {
          pci: periodCourseId
          pc: periodCourse {
            p: periodId
          }
        }
      }
    }
  }
`

export const GETUSERS = gql`
  query Users {
    users {
      id
      email
      name
      lastName
      roles {
        id
        name
      }
    }
  }
`

export const GETROLES = gql`
  query Roles {
    roles {
      id
      name
    }
  }
`
export const LOGOUT = gql`
  query Query {
    logout
  }
`
export const GETGRADES = gql`
  query GetGradesByAsignature($periodCourseId: Float!) {
    getGradesByAsignature(periodCourseId: $periodCourseId)
  }
`

export const GETLIST = gql`
  query GetList($periodCourseId: Float!) {
    getList(periodCourseId: $periodCourseId)
  }
`
