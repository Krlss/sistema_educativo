import { useLazyQuery, useMutation } from '@apollo/client'
import { GETTOPICS } from './graphql-queries'
import { CREATEUSERUNIT } from './graphql-mutations'
import { getRamdonArrayColors } from '../../constants/colors'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import GeneralContext from '../../contexts/context'
import { USER } from '../../types/ContextUser'
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

export interface IcreateUserUnit {
  createUserUnit: USER
}

export const useGetTopics = () => {
  const navigate = useNavigate()
  const { setLoading, user, setUser } = useContext(GeneralContext)
  const [asignature, setAsignature] = useState<ASIGNATURES>()
  const [colors, setColors] = useState<string[]>([])

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
      console.log(error)
    },
    onCompleted(data) {
      const { createUserUnit } = data
      setUser({ ...createUserUnit, rememberMe: user.rememberMe })
      console.log('unidad agregada al progreso del usuario')
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
        setUser({ ...createUserUnit })
      }
    })
  }

  useEffect(() => {
    getTopicsHandler({
      asignatureId,
      unitId
    })

    if (createdUserUnit === undefined) {
      createUserUnitHandler({ asignatureId, unitId, userId: user._id })
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [asignatureId, unitId])

  return {
    getTopics,
    getTopicsHandler,
    asignature,
    colors,
    asignatureId
  }
}
