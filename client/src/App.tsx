/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import * as utils from './utils';
import AppMainStack from './AppMainStack';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider useDark={colorScheme === 'dark'}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView style={styles.container}>
        <AppMainStack/>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    // paddingTop:'5%',
  },
});

export default App;
