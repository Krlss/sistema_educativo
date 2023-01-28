import { gql } from '@apollo/client'

export const LOGIN = gql`
  query Query($data: userLoginInputs!) {
    login(data: $data) {
      id
      email
      lastName
      name
      createdAt
      updatedAt
      roles {
        name
        id
        createdAt
      }
    }
  }
`
