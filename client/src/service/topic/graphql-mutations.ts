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
      _id
      name
      lastname
      mail
      username
      rol
      progress {
        _id
        nota
        id_asignature
        unit {
          _id
          nota
          id_unit
          finished
          topic {
            _id
            nota
            id_topic
            finished
            questions {
              _id
              nota
              id_question
              isDone
            }
          }
          questions {
            _id
            nota
            id_question
            isDone
          }
        }
      }
    }
  }
`
