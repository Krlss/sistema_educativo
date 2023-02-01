import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GETPERIODS } from './graphql-queries'
import { getRamdonArrayColors, pastelColors } from '../../constants/colors'

import GeneralContext from '../../contexts/context'

export interface PERIOD {
  id: number
  name: string
}

export interface getPeriodsProps {
  getPeriods: PERIOD[]
}

export interface getPeriodProps {
  getPeriod: PERIOD
}

export const useGetPeriods = () => {
  const { data, loading, error } = useQuery<getPeriodsProps>(GETPERIODS)
  return { dataPeriods: data, error, loadingPeriods: loading }
}
