import { gql } from '@apollo/client'

export const GETPERIODS = gql`
  query Periods {
    periods {
      id
      name
      createdAt
      updatedAt
    }
  }
`
