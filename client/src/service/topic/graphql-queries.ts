import { gql } from '@apollo/client'

export const GETTOPICS = gql`
  query GETTOPICS($asinatureId: String!, $unitId: String!) {
    getTopics(asignatureId: $asinatureId, unitId: $unitId) {
      _id
      name
      asignature_name
      topic {
        _id
        name
        description
      }
    }
  }
`
