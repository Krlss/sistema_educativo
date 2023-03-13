import { gql } from '@apollo/client'

export const GETCOURSES = gql`
  query Courses {
    courses {
      id
      name
      createdAt
      updatedAt
      periodsCourses {
        id
        createdAt
        updatedAt
        periodId
        courseId
        period {
          name
          id
          createdAt
          updatedAt
        }
        periodsCoursesAsignatures {
          asignature {
            id
            name
          }
        }
      }
    }
  }
`
