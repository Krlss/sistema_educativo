import { gql } from '@apollo/client'

export const GETASIGNATURE = gql`
  query Query($userId: String!, $asignatureId: String!) {
    getAsignatureUserInscribed(userId: $userId, asignatureId: $asignatureId) {
      id
      name
      description
      image
      units {
        id
        name
        testActive
        topics {
          id
          name
        }
      }
    }
  }
`

export const GETTOPIC = gql`
  query Topic($topicId: String!) {
    topic: topicWithOneHighQuestion(id: $topicId) {
      id
      name
      image
      video
      question {
        id
        title
        subtitle
        type
        options
        difficulty
      }
    }
  }
`
export const GETASIGNATURES = gql`
  query Asignatures {
    asignatures {
      id
      name
      description
      image
      createdAt
      updatedAt
      periodsCoursesAsignatures {
        periodCourseAsignatureUnits {
          unit {
            id
            name
          }
        }
      }
    }
  }
`

export const GETASIGNATURESXPERIODCOURSE = gql`
  query Query {
    periodsCoursesAsignatures {
      periodCourseId
      asignature {
        name
        id
        description
        image
      }
      periodCourseAsignatureUnits {
        unit {
          id
          name
        }
      }
    }
  }
`
