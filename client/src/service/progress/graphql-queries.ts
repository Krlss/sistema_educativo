import { gql } from '@apollo/client'

export const GET_USER_PROGRESS = gql`
  query getUserProgress($userId: String!) {
    getUserProgress(userId: $userId) {
      _id
      nota
      id_asignature
      unit {
        _id
        topic {
          _id
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
