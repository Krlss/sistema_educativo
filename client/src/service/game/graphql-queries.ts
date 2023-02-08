import { gql } from '@apollo/client'

export const QUESTIONS_BY_UNIT = gql`
  query questionsByUnit($unitId: String!, $asignatureId: String!) {
    getRandomUnitQuestions(unitId: $unitId, asignatureId: $asignatureId) {
      id
      options
      title
      type
      subtitle
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
