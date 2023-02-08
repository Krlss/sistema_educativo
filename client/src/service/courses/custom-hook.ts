import { useMutation, useQuery } from '@apollo/client'
import { course } from '../../pages/dashboard/cursos'
import { CREATE_COURSE, UPDATE_COURSE } from './graphql-mutation'
import { GETCOURSES } from './graphql-queries'
import { toast } from 'react-toastify'

interface IGETCOURSES {
  data: {
    courses: course[]
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

  const handleCreateCourse = (course: { name: string; periods?: string[] }) => {
    createCourse({
      variables: {
        input: {
          ...course
        }
      },
      onCompleted: () => {
        toast.success('Curso creado con éxito')
      },
      onError(error: any) {
        toast.error(error.response.message.map((e: any) => e.message).join(''))
      }
    })
  }

  const handleUpdateCourse = (course: {
    id: string
    name?: string
    periods?: string[]
  }) => {
    console.log({ course })
    updateCourse({
      variables: {
        input: {
          ...course
        }
      },
      onCompleted: () => {
        toast.success('Curso actualizado con éxito')
      },
      onError(error) {
        toast.error(error.message)
      }
    })
  }

  return {
    createCourse,
    handleCreateCourse,
    handleUpdateCourse
  }
}
