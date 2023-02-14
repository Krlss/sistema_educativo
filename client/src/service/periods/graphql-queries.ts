import { gql } from '@apollo/client'

export const GETPERIODS = gql`
  query Periods {
    periods {
      id
      name
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
