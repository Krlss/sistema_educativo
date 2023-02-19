import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation Mutation($input: CreateUserDTO!) {
    createUser(input: $input) {
      id
    }
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

export const UPDATE_USER_TOPIC = gql`
  mutation Mutation($input: UpdateUserDTO!) {
    updateUser(input: $input) {
      id
    }
  }
`
