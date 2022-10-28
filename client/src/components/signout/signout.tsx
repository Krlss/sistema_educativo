import React from 'react'
import { ApolloConsumer } from 'react-apollo'

/* import * as routes from '../../constants/routes';
import history from '../../constants/history'; */

const SignOutButton = () => (
  <ApolloConsumer>
    {client => (
      <button type="button" onClick={() => signOut(client)}>
        Sign Out
      </button>
    )}
  </ApolloConsumer>
)

const signOut = (client: any) => {
  /* localStorage.removeItem('token');
  history.push(routes.SIGN_IN); */
  client.resetStore()
}

export { signOut }

export default SignOutButton
