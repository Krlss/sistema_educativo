import { USER, PROGRESS, IUpdateFinishedTopic } from '../../types/ContextUser'
import { setDataSession, removeDataSession } from '../../utils/dataSession'

export type UserReducerProps =
  | { type: 'setUser'; payload: USER }
  | { type: 'resetUser'; payload: undefined }
  | { type: 'setUserProgress'; payload: PROGRESS[] }
  | { type: 'updateFinishedTopic'; payload: IUpdateFinishedTopic }

export default (state: USER, action: UserReducerProps) => {
  const { type, payload } = action

  switch (type) {
    case 'setUser':
      setDataSession('token', payload)
      return {
        ...state,
        ...payload,
        isLogged: true
      }
    case 'resetUser':
      removeDataSession('token')
      return {
        ...state,
        _id: '',
        username: '',
        lastname: '',
        name: '',
        mail: '',
        password: '',
        rol: [],
        progress: [],
        isLogged: false
      }
    case 'setUserProgress':
      return {
        ...state,
        progress: payload
      }
    /* case 'updateFinishedTopic':
      const { asignatureId, unitId, topicId } = payload
      const progress = state.progress.map(asignature => {
        if (asignature.id_asignature === asignatureId) {
          const unit = asignature.unit?.map(unit => {
            if (unit.id_unit === unitId) {
              const topic = unit.topic.map(topic => {
                if (topic.id_topic === topicId) {
                  return {
                    ...topic,
                    finished: true
                  }
                }
                return topic
              })
              return {
                ...unit,
                topic
              }
            }
            return unit
          })
          return {
            ...asignature,
            unit
          }
        }
        return asignature
      })
      return {
        ...state,
        progress
      } */
    default:
      return state
  }
}
