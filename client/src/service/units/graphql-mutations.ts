import { gql } from '@apollo/client'

export const CHANGE_TEST_ACTIVE = gql`
  mutation Mutation($input: UpdatePeriodsCoursesAsignaturesUnitDTO!) {
    testUnitActive(input: $input) {
      id
    }
  }
`
