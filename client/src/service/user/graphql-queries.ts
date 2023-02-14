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
      progress {
        pca: periodCourseAsignature {
          pci: periodCourseId
          pc: periodCourse {
            p: periodId
          }
        }
      }
      value: id
      label: email
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
      createdAt
      updatedAt
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
