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
  query ASIGNATURE($id: String!) {
    getAsignature(id: $id) {
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
