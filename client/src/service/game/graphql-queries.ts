import { gql } from '@apollo/client'

export const QUESTIONS_BY_UNIT = gql`
  query QuestionsByUnit(
    $unitId: String!
    $asignatureId: String!
    $userId: String!
  ) {
    getRandomUnitQuestions: questionsByUnit(
      unitId: $unitId
      asignatureId: $asignatureId
      userId: $userId
    ) {
      id
      title
      subtitle
      options
      type
    }
  }
`

export const QUESTIONS_BY_ASIGNATURE = gql`
  query questionsByAsignature($asignatureId: String!) {
    getRandomQuestionsByAsignatures(asignatureId: $asignatureId) {
      id
      options
      title
      type
      subtitle
    }
  }
`
