import { gql } from '@apollo/client'

export const GETTOPICS = gql`
  query TopicsByAsignatureAndUser(
    $asignatureId: String!
    $userId: String!
    $unitId: String!
  ) {
    topicsByAsignatureAndUser(
      asignatureId: $asignatureId
      userId: $userId
      unitId: $unitId
    ) {
      id
      name
      description
      image
      unit {
        id
        name
        topics {
          id
          name
          image
          video
        }
      }
    }
  }
`
