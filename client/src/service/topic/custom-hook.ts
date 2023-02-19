import { useLazyQuery, useMutation } from '@apollo/client'
import { GETTOPICS } from './graphql-queries'
import { CREATEUSERUNIT, updatedFinishedTopic } from './graphql-mutations'
import { getRamdonArrayColors } from '../../constants/colors'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import GeneralContext from '../../contexts/context'
import { USER } from '../../types/ContextUser'
import { getDataSession } from '../../utils/dataSession'
import { GET_USER_PROGRESS } from '../progress/graphql-queries'

interface IGetTopics {
  id: string
  asignature_name: string
  PCA: periodsCoursesAsignatures[]
}

interface unit {
  id: string
  name: string
}

interface periodCourseAsignatureUnitsTopic {
  topic: topic
}

interface periodCourseAsignatureUnits {
  unit: unit
  PCAUT: periodCourseAsignatureUnitsTopic[]
}

interface periodsCoursesAsignatures {
  PCAU: periodCourseAsignatureUnits[]
}

interface topic {
  id: string
  name: string
  image?: string
  video?: string
}

export interface getTopicsProps {
  topicsByAsignatureAndUser: IGetTopics
}

export interface IcreateUserUnit {
  createUserUnit: USER
}

export const useGetTopics = () => {
  const navigate = useNavigate()
  const { setLoading, user } = useContext(GeneralContext)
  const [asignature, setAsignature] = useState<IGetTopics>()
  const [colors, setColors] = useState<string[]>([])

  const { asignatureId, unitId } = useParams() as {
    asignatureId: string
    unitId: string
  }

  const [getTopics] = useLazyQuery<getTopicsProps>(GETTOPICS)

  const getTopicsHandler = (props: {
    asignatureId: string
    userId: string
    unitId: string
  }) => {
    setLoading(true)
    getTopics({
      variables: { ...props },
      onCompleted: ({ topicsByAsignatureAndUser }) => {
        console.log({ topicsByAsignatureAndUser })
        const dataTrasnformed = topicsByAsignatureAndUser.PCA[0].PCAU.find(
          u => u.unit.id === unitId
        ) as periodCourseAsignatureUnits
        setAsignature({
          asignature_name: topicsByAsignatureAndUser.asignature_name,
          id: topicsByAsignatureAndUser.id,
          PCA: [
            {
              PCAU: [dataTrasnformed]
            }
          ]
        })
        setColors(
          getRamdonArrayColors(
            topicsByAsignatureAndUser.PCA[0].PCAU[0].PCAUT.length
          )
        )
        setLoading(false)
      },
      onError: () => {
        setLoading(false)
        navigate(`/asignatura/${props.asignatureId}`)
      }
    })
  }

  useEffect(() => {
    getTopicsHandler({
      asignatureId,
      userId: user.id,
      unitId
    })

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [asignatureId, unitId, user.id])

  return {
    getTopics,
    getTopicsHandler,
    asignature,
    colors,
    asignatureId,
    unitId,
    user
  }
}
