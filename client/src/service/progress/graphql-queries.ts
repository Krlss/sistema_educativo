import { gql } from '@apollo/client'

export const GET_USER_PROGRESS = gql`
  query getUserProgress($userId: String!) {
    getUserProgress(userId: $userId) {
      id
      nota
      id_asignature
      unit {
        id
        id_unit
        id_asignature
        nota
        finished
        topic {
          id
          id_topic
          nota
          finished
        }
      }
    }
  }
`
