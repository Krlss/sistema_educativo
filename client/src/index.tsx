import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { ApolloClient, HttpLink, gql, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:8000/graphql'
  })
})

const query = gql`
  query {
    getUsers {
      name
      lastname
    }
  }
`

client.query({ query }).then(result => console.log(result))

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
