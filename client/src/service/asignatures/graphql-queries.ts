import { gql } from '@apollo/client'

export const GETASIGNATURES = gql`
  query Query($id: String!) {
    getAsignatures: getAsignaturesUserInscribed(id: $id) {
      id
      name
      description
      image
      PCA: periodsCoursesAsignatures {
        PCAU: periodCourseAsignatureUnits {
          unit {
            id
            name
          }
          PCAUT: periodCourseAsignatureUnitsTopic {
            topic {
              id
              name
              image
              video
            }
          }
        }
      }
    }
  }
`
export const GETASIGNATURE = gql`
  query Query($userId: String!, $asignatureId: String!) {
    getAsignatureUserInscribed(userId: $userId, asignatureId: $asignatureId) {
      id
      name
      description
      image
      PCA: periodsCoursesAsignatures {
        PCAU: periodCourseAsignatureUnits {
          unit {
            id
            name
          }
          PCAUT: periodCourseAsignatureUnitsTopic {
            topic {
              name
            }
          }
        }
      }
    }
  }
`
