import { useMutation } from '@apollo/client'
import { CHANGE_TEST_ACTIVE } from './graphql-mutations'

export const useTestUnitActive = () => {
  const [testUnitActive, { data, error }] = useMutation(CHANGE_TEST_ACTIVE)

  const changeTestUnitActive = (id: string, active: boolean) => {
    testUnitActive({
      variables: {
        input: {
          id,
          active
        }
      }
    })
  }

  return { testUnitActive, data, error, changeTestUnitActive }
}
