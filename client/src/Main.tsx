import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { getAndroidServerURL } from './utils';

// Init Apollo Client
const apolloClient = new ApolloClient({
  uri: getAndroidServerURL() + '/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          candidates: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          skills: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    }
  }),
});

const Main = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <PaperProvider>
          <App />
        </PaperProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default Main;