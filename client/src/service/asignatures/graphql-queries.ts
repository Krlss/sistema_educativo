import { gql } from '@apollo/client'

export const GETASIGNATURES = gql`
  query ASIGNATURES {
    getAsignatures {
      _id
      name
      description
      image
      unit {
        _id
        name
        topic {
          _id
          name
          description
          video
        }
      }
    }
  }
`

export const GETASIGNATURE = gql`
  query ASIGNATURE($asignatureId: String!) {
    getAsignature(id: $asignatureId) {
      _id
      name
      description
      image
      unit {
        _id
        name
        topic {
          _id
          name
          description
          video
        }
      }
    }
  }
`
