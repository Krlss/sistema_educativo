import { gql } from '@apollo/client'

export const GET_USER_PROGRESS = gql`
  query getUserProgress($userId: String!) {
    getUserProgress(userId: $userId) {
      id
      nota
      image
      name
      percentage
      unit {
        id
        id_asignature
        nota
        finished
        topic {
          id
          id_asignature
          id_unit
          finished
          name
          image
          video
        }
      }
    }
  }
`
