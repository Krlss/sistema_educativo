import { gql } from '@apollo/client'

export const GETPERIODS = gql`
  query Periods {
    periods {
      id
      name
      periodsCourses {
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
      }
    }
  }
`
