import { gql } from '@apollo/client'

export const REGISTER = gql`
  mutation createUser(
    $firstname: String!
    $lastname: String!
    $username: String!
    $email: String!
    $password: String!
    $rol: [String!]!
  ) {
    createUser(
      name: $firstname
      lastname: $lastname
      mail: $email
      username: $username
      password: $password
      rol: $rol
    )
  }
`
