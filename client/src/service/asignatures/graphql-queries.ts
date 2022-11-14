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

export const GETASIGNATURE = gql`
  query ASIGNATURE($asinatureId: String!) {
    getAsignature(id: $asinatureId) {
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
