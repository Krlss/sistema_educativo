import { gql } from '@apollo/client'

export const GETCOURSES = gql`
  query Query {
    getCourses {
      id
      createdAt
      name
      updatedAt
    }
  }
`
