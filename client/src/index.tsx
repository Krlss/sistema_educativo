import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { getDataSession } from './utils/dataSession'

import App from './App'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  createHttpLink,
  ApolloProvider
} from '@apollo/client'
import GeneralProvider from './contexts/provider'

import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
  credentials: 'include'
})

const authLink = setContext((_, { headers }) => {
  const token = getDataSession('rt')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <GeneralProvider>
        <App />
      </GeneralProvider>
    </ApolloProvider>
  </BrowserRouter>
)
