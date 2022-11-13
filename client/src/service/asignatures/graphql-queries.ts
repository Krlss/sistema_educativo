import { gql } from '@apollo/client'

export const GETASIGNATURES = gql`
  query ASIGNATURES {
    getAsignatures {
      _id
      name
      description
      unit {
        _id
        name
        topic {
          _id
          name
          description
        }
      }
    }
  }
`
