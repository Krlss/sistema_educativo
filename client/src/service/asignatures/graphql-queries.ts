import { gql } from '@apollo/client'

export const GETASIGNATURE = gql`
  query Query($userId: String!, $asignatureId: String!) {
    getAsignatureUserInscribed(userId: $userId, asignatureId: $asignatureId) {
      id
      name
      description
      image
      units {
        id
        name
        topics {
          id
          name
        }
      }
    }
  }
`

export const GETTOPIC = gql`
  query Topic($topicId: String!) {
    topic(id: $topicId) {
      id
      name
      image
      video
    }
  }
`
