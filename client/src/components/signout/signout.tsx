/* import * as routes from '../../constants/routes';
import history from '../../constants/history'; */

const SignOutButton = () => <></>

const signOut = (client: any) => {
  /* localStorage.removeItem('token');
  history.push(routes.SIGN_IN); */
  client.resetStore()
}

export { signOut }

export default SignOutButton
