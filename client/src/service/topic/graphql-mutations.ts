import { gql } from '@apollo/client'

export const CREATEUSERUNIT = gql`
  mutation createUserUnit(
    $unitId: String!
    $asignatureId: String!
    $userId: String!
  ) {
    createUserUnit(
      unitId: $unitId
      asignatureId: $asignatureId
      userId: $userId
    ) {
      id
      name
      lastname
      mail
      username
      rol
      progress {
        id
        nota
        id_asignature
        unit {
          id
          nota
          id_unit
          finished
          topic {
            id
            nota
            id_topic
            finished
            questions {
              id
              nota
              id_question
              isDone
            }
          }
          questions {
            id
            nota
            id_question
            isDone
          }
        }
      }
    }
  }
`

export const updatedFinishedTopic = gql`
  mutation Mutation($topicId: String!) {
    updateFinishedTopic(topicId: $topicId)
  }
`
