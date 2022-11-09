import { gql } from '@apollo/client'

export const LOGIN = gql`
  query LOGIN($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      _id
      name
      lastname
      mail
      username
      rol
    }
  }
`
