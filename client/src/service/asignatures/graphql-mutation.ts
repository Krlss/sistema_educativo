import { gql } from '@apollo/client'

export const CREATE_ASIGNATURE = gql`
  mutation Mutation($input: CreateAsignatureDTO!) {
    createAsignature(input: $input) {
      id
      name
    }
  }
`

export const UPDATE_ASIGNATURE = gql`
  mutation Mutation($input: UpdateAsignatureDTO!) {
    updateAsignature(input: $input) {
      id
      name
    }
  }
`
