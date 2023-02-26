import { useQuery } from '@apollo/client'
import { GETSTUDENTS } from '../../service/user/graphql-queries'

export interface Student {
  value: string
  lastName: string
  name: string
  email: string
  label: string
  progress: { pca: { pci: number; pc: { p: string } } }[]
}

export const useStudents = () => {
  const { data: dataStudents } = useQuery(GETSTUDENTS) as {
    data: { students: Student[] }
    loading: boolean
  }

  return {
    dataStudents
  }
}
