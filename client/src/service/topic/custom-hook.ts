import { useLazyQuery, useMutation } from '@apollo/client'
import { GETTOPICS } from './graphql-queries'
import { CREATEUSERUNIT } from './graphql-mutations'
import { getRamdonArrayColors } from '../../constants/colors'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import GeneralContext from '../../contexts/context'
import { USER } from '../../types/ContextUser'
import { getDataSession } from '../../utils/dataSession'

interface IGetTopics {
  _id: string
  name: string
  asignature_name: string
  topic: {
    _id: string
    name: string
    description: string
    video: string
  }[]
}

interface TOPIC {
  _id: string
  name: string
  description?: string
  video?: string
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

export interface IcreateUserUnit {
  createUserUnit: USER
}

export const useGetTopics = () => {
  const navigate = useNavigate()
  const { setLoading, user, setUser } = useContext(GeneralContext)
  const [asignature, setAsignature] = useState<ASIGNATURES>()
  const [colors, setColors] = useState<string[]>([])
  const token = getDataSession('token')

  const { asignatureId, unitId } = useParams() as {
    asignatureId: string
    unitId: string
  }

  const [getTopics] = useLazyQuery<getTopicsProps>(GETTOPICS)

  const getTopicsHandler = (props: {
    asignatureId: string
    unitId: string
  }) => {
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
        navigate(`/curso/${props.asignatureId}`)
      }
    })
  }

  const createdUserUnit = user.progress
    .find(progress => progress.id_asignature === asignatureId)
    ?.unit?.find(unit => unit.id_unit === unitId)

  const [createUserUnit] = useMutation<IcreateUserUnit>(CREATEUSERUNIT, {
    onError(error) {
      console.error('Error creating user unit', error)
    },
    onCompleted(data) {
      const { createUserUnit } = data
      setUser({ ...createUserUnit })
      console.log('unit created')
    }
  })

  const createUserUnitHandler = (props: {
    asignatureId: string
    unitId: string
    userId: string
  }) => {
    createUserUnit({
      variables: { ...props },
      onCompleted: ({ createUserUnit }) => {
        setUser({ ...createUserUnit, rememberMe: token.rememberMe })
      }
    })
  }

  useEffect(() => {
    getTopicsHandler({
      asignatureId,
      unitId
    })

    if (createdUserUnit === undefined && token) {
      createUserUnitHandler({ asignatureId, unitId, userId: token._id })
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [asignatureId, unitId])

  return {
    getTopics,
    getTopicsHandler,
    asignature,
    colors,
    asignatureId,
    unitId
  }
}
