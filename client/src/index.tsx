import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { getDataSession } from './utils/dataSession'

import App from './App'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import GeneralProvider from './contexts/provider'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: new HttpLink({
    uri: 'http://localhost:8000/graphql',
    credentials: 'include',
    headers: () => {
      const rt = getDataSession('rt')
      return {
        authorization: rt ? `Bearer ${rt}` : ''
      }
    }
  })
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
