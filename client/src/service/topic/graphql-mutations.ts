import { gql } from '@apollo/client'

export const CREATEUSERTOPIC = gql`
  mutation createUserUnit(
    $unitId: String!
    $asignatureId: String!
    $userId: String!
  ) {
    createUserUnit(
      unitId: $unitId
      asignatureId: $asignatureId
      userId: $userId
    )
  }
`
