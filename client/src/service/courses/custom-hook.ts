import { useMutation, useQuery } from '@apollo/client'
import { RowCourse } from '../../pages/dashboard/cursos'
import { CREATE_COURSE, UPDATE_COURSE } from './graphql-mutation'
import { GETCOURSES } from './graphql-queries'

interface IGETCOURSES {
  data: {
    getCourses: RowCourse[]
  }
  loading: boolean
  error: any
}

export const useGetCourses = () => {
  const { data, loading, error } = useQuery(GETCOURSES) as IGETCOURSES

  return { data, loading, error }
}

export const useCreateCourse = () => {
  const [createCourse] = useMutation(CREATE_COURSE, {
    refetchQueries: [{ query: GETCOURSES }]
  })
  const [updateCourse] = useMutation(UPDATE_COURSE, {
    refetchQueries: [{ query: GETCOURSES }]
  })

  const handleCreateCourse = (course: { name: string }) => {
    createCourse({
      variables: {
        data: {
          ...course
        }
      },
      onCompleted: () => {
        console.log('onCompleted')
      },
      onError(error) {
        console.log('onError' + error)
      }
    })
  }

  const handleUpdateCourse = (
    updateCourseId: number | undefined,
    course: { name: string }
  ) => {
    updateCourse({
      variables: {
        data: {
          ...course
        },
        updateCourseId
      },
      onCompleted: () => {
        console.log('onCompleted')
      },
      onError(error) {
        console.log('onError' + error)
      }
    })
  }

  return {
    createCourse,
    handleCreateCourse,
    handleUpdateCourse
  }
}
