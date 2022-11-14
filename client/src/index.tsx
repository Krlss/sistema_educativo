import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
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
    uri: 'http://localhost:8000/graphql'
  })
})

document.body.classList.add('bg-slate-200')

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
