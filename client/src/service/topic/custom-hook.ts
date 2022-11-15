import { useLazyQuery, useMutation } from '@apollo/client'
import { GETTOPICS } from './graphql-queries'
import { CREATEUSERTOPIC } from './graphql-mutations'
import { getRamdonArrayColors } from '../../constants/colors'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import GeneralContext from '../../contexts/context'

interface IGetTopics {
  _id: string
  name: string
  asignature_name: string
  topic: {
    _id: string
    name: string
    description: string
  }[]
}

interface TOPIC {
  _id: string
  name: string
  description?: string
}

interface ASIGNATURES {
  _id: string
  asignature_name: string
  name: string
  topic?: TOPIC[]
}

export interface getTopicsProps {
  getTopics: IGetTopics
}

export const useGetTopics = () => {
  const navigate = useNavigate()
  const { setLoading } = useContext(GeneralContext)
  const [asignature, setAsignature] = useState<ASIGNATURES>()
  const [colors, setColors] = useState<string[]>([])

  const { asinatureId, unitId } = useParams() as {
    asinatureId: string
    unitId: string
  }

  const [getTopics, { data, error, loading }] =
    useLazyQuery<getTopicsProps>(GETTOPICS)

  const getTopicsHandler = (props: { asinatureId: string; unitId: string }) => {
    setLoading(true)
    getTopics({
      variables: { ...props },
      onCompleted: ({ getTopics }) => {
        setAsignature(getTopics)
        setColors(getRamdonArrayColors(getTopics.topic.length))
        setLoading(false)
      },
      onError: () => {
        setLoading(false)
        navigate(`/curso/${props.asinatureId}`)
      }
    })
  }

  useEffect(() => {
    getTopicsHandler({
      asinatureId,
      unitId
    })

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [asinatureId, unitId])

  return {
    getTopics,
    getTopicsHandler,
    data,
    error,
    loading,
    asignature,
    colors,
    asinatureId
  }
}

export interface IcreateUserUnit {
  createUserUnit: boolean
}

export const useCreateUserTopic = () => {
  const [createUserTopic, { data, error, loading }] =
    useMutation<IcreateUserUnit>(CREATEUSERTOPIC)

  return { createUserTopic, data, error, loading }
}
