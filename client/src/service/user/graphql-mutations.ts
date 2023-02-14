import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation CreateUser($data: userCreateInput!) {
    createUser(data: $data)
  }
`

export const ENROLL = gql`
  mutation Mutation($data: CreateProgressDTO!) {
    enrollUser(data: $data)
  }
`

export const UPDATE_USER_ROLES = gql`
  mutation Mutation($input: UpdateUserDTO!) {
    updateUser(input: $input) {
      id
    }
  }
`
