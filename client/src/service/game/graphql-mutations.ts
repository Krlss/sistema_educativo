import { gql } from '@apollo/client'

export const QUALIFY_FOR_UNIT = gql`
  mutation Mutation($input: UpdateProgressDTO!) {
    updateProgress(updateProgressInput: $input)
  }
`
