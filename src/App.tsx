import Router from './Router';
import './assets/partials/app.scss';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink
} from "@apollo/client"

// const httpLink = new HttpLink({ uri: 'http://localhost:4040' });
const httpLink = new HttpLink({ uri: 'http://18.223.190.134/api/' });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('auth_token');
  operation.setContext({
    headers: {
      authorization: token? token:''
    }
  })
  return forward(operation)
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client} >
      <div className="App">
        <Router/>
      </div>
    </ApolloProvider>
  );
}

export default App;
