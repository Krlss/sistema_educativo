import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GETPERIODS } from './graphql-queries'
import { getRamdonArrayColors, pastelColors } from '../../constants/colors'

import GeneralContext from '../../contexts/context'
import { period } from '../../pages/dashboard/cursos'

export interface getPeriodsProps {
  periods: period[]
}

export interface getPeriodProps {
  periods: period
}

export const useGetPeriods = () => {
  const { data, loading, error } = useQuery<getPeriodsProps>(GETPERIODS)
  return { data, error, loadingPeriods: loading }
}
