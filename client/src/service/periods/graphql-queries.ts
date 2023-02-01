import { gql } from '@apollo/client'

export const GETPERIODS = gql`
  query getPeriods {
    getPeriods {
      name
      id
    }
  }
`
