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
      username
      name
      lastname
      mail
      rol
      progress {
        _id
        nota
        id_asignature
        unit {
          _id
          nota
          id_unit
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
        }
      }
    }
  }
`
