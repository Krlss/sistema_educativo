import { gql } from '@apollo/client'

export const LOGIN = gql`
  query LOGIN($username: String!, $password: String!, $rememberMe: Boolean!) {
    login(username: $username, password: $password, rememberMe: $rememberMe) {
      _id
      username
      name
      lastname
      mail
      rol
      rememberMe
      progress {
        _id
        nota
        id_asignature
        questions
        unit {
          _id
          nota
          id_unit
          questions
          finished
          topic {
            _id
            nota
            id_topic
            finished
          }
        }
      }
    }
  }
`
