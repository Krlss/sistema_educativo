import { gql } from '@apollo/client'

export const GET_USER_PROGRESS = gql`
  query getUserProgress($userId: String!) {
    getUserProgress(userId: $userId) {
      id
      nota
      id_asignature
      unit {
        id
        topic {
          id
          nota
          id_topic
          finished
        }
        nota
        id_unit
        finished
      }
    }
  }
`
