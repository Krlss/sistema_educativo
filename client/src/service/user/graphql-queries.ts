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
