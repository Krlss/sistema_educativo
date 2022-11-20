import { gql } from '@apollo/client'

export const GETTOPICS = gql`
  query GETTOPICS($asignatureId: String!, $unitId: String!) {
    getTopics(asignatureId: $asignatureId, unitId: $unitId) {
      _id
      name
      asignature_name
      topic {
        _id
        name
        description
        video
      }
    }
  }
`
