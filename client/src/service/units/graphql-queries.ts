import { gql } from '@apollo/client'

export const GETUNITS = gql`
  query Units {
    units {
      id
      name
    }
  }
`
