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
        testActive
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
    topic: topicWithOneHighQuestion(id: $topicId) {
      id
      name
      image
      video
      question {
        id
        title
        subtitle
        type
        options
        difficulty
      }
    }
  }
`
