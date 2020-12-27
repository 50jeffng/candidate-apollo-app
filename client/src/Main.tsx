import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';

const Main = () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

export default Main;