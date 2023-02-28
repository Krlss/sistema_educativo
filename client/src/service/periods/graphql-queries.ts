import { gql } from '@apollo/client'

export const GETPERIODS = gql`
  query Query {
    periods {
      id
      name
      createdAt
      updatedAt
      PC: periodsCourses {
        id
        periodId
        courseId
        period {
          name
          id
        }
        course {
          name
          id
        }
        PCA: periodsCoursesAsignatures {
          id
          asignature {
            name
            id
          }
          PCAU: periodCourseAsignatureUnits {
            id
            testActive
            unit {
              name
              id
            }
          }
        }
      }
    }
  }
`
