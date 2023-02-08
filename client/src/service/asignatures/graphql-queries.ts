import { gql } from '@apollo/client'

export const GETASIGNATURES = gql`
  query ASIGNATURES {
    getAsignatures {
      id
      name
      description
      image
      unit {
        id
        name
        topic {
          id
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
      id
      name
      description
      image
      unit {
        id
        name
        topic {
          id
          name
          description
          video
        }
      }
    }
  }
`
