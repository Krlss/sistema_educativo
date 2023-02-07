import { gql } from '@apollo/client'

export const GETCOURSES = gql`
  query Query {
    courses {
      id
      createdAt
      name
      updatedAt
    }
  }
`
