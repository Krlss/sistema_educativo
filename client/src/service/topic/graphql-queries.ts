import { gql } from '@apollo/client'

export const GETTOPICS = gql`
  query GETTOPICS($asignatureId: String!, $unitId: String!) {
    getTopics(asignatureId: $asignatureId, unitId: $unitId) {
      id
      name
      asignature_name
      topic {
        id
        name
        description
        video
      }
    }
  }
`
