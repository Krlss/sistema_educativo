import React from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import {
  getRandomQuestionsByAsignatures,
  getRandomQuestionsProps,
  question
} from '../../types/game'
import { GET_USER_PROGRESS } from '../progress/graphql-queries'
import { QUALIFY_FOR_UNIT } from './graphql-mutations'
import { QUESTIONS_BY_ASIGNATURE, QUESTIONS_BY_UNIT } from './graphql-queries'
import { useNavigate } from 'react-router-dom'
import {
  getDataSession,
  setDataQuestionLocalStore,
  setDataTest
} from '../../utils/dataSession'
import jwtDecode from 'jwt-decode'
import { USER } from '../../types/ContextUser'

export const useQualifyForUnit = () => {
  const [QualifyForUnit] = useMutation(QUALIFY_FOR_UNIT)

  const handlerQualifyForUnit = (props: {
    userId: string
    asignatureId: string
    unitId: string
    questions: string
    nota: number
  }) => {
    QualifyForUnit({
      variables: {
        input: {
          ...props
        }
      },
      onCompleted() {
        console.log('Completed')
      },
      refetchQueries: [GET_USER_PROGRESS]
    })
  }

  return {
    handlerQualifyForUnit
  }
}

export const useQuestionsByUnit = () => {
  const [getRandomQuestions] =
    useLazyQuery<getRandomQuestionsProps>(QUESTIONS_BY_UNIT)
  const navigate = useNavigate()
  const rt = getDataSession('rt')
  const handleGetRandomQuestionsByUnit = ({
    asignatureId,
    unitId,
    setDataGame
  }: {
    asignatureId: string
    unitId: string
    setDataGame: React.Dispatch<React.SetStateAction<question[]>>
  }) => {
    setDataTest('questionsId', {
      asignatureId,
      unitId
    })
    const user = jwtDecode<USER>(rt)
    getRandomQuestions({
      variables: {
        unitId,
        asignatureId,
        userId: user.id
      },
      onCompleted(data) {
        if (data.getRandomUnitQuestions) {
          setDataQuestionLocalStore('dataGame', data.getRandomUnitQuestions)
          setDataGame(data.getRandomUnitQuestions)
        }
      },
      onError() {
        navigate('/')
      }
    })
  }
  return {
    handleGetRandomQuestionsByUnit
  }
}

export const useQuestionByAsignature = () => {
  const [getRandomQuestionsByAsignatures] =
    useLazyQuery<getRandomQuestionsByAsignatures>(QUESTIONS_BY_ASIGNATURE)
  const navigate = useNavigate()

  const handleGetRandomQuestionsByAsignature = ({
    asignatureId,
    setDataGame
  }: {
    asignatureId: string
    setDataGame: React.Dispatch<React.SetStateAction<question[]>>
  }) => {
    setDataTest('questionsId', {
      asignatureId
    })
    getRandomQuestionsByAsignatures({
      variables: {
        asignatureId
      },
      onCompleted(data) {
        if (data.getRandomQuestionsByAsignatures) {
          setDataQuestionLocalStore(
            'dataGame',
            data.getRandomQuestionsByAsignatures
          )
          setDataGame(data.getRandomQuestionsByAsignatures)
        }
      },
      onError() {
        navigate('/')
      }
    })
  }
  return {
    handleGetRandomQuestionsByAsignature
  }
}
