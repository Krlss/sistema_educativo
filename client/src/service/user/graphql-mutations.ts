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
