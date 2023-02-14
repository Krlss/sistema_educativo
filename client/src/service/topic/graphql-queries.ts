import { gql } from '@apollo/client'

export const GETTOPICS = gql`
  query TopicsByAsignatureAndUser(
    $asignatureId: String!
    $userId: String!
    $unitId: String!
  ) {
    topicsByAsignatureAndUser(
      asignatureId: $asignatureId
      userId: $userId
      unitId: $unitId
    ) {
      id
      asignature_name: name
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
