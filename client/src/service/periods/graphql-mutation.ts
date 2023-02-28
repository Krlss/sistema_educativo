import { gql } from '@apollo/client'

export const CREATE_PERIOD = gql`
  mutation Mutation($input: CreatePeriodDTO!) {
    createPeriod(input: $input) {
      id
      name
    }
  }
`

export const UPDATE_PERIOD = gql`
  mutation Mutation($input: UpdatePeriodDTO!) {
    updatePeriod(input: $input) {
      id
      name
    }
  }
`
