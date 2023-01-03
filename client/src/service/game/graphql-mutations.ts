import { gql } from '@apollo/client'

export const QUALIFY_FOR_UNIT = gql`
  mutation QualifyForUnit(
    $data: String!
    $unitId: String!
    $progressId: String!
    $userId: String!
    $nota: Float!
  ) {
    qualifyUnitUserQuestion(
      data: $data
      unitId: $unitId
      progressId: $progressId
      userId: $userId
      nota: $nota
    )
  }
`
