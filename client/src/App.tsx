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
import Test from './Test';
import CandidatesList from './CandidatesList';
import CandidateSearchBar from './CandidateSearchBar';
import Navigation from './Navigation';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider useDark={colorScheme === 'dark'}>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView style={styles.container}>
        <Navigation></Navigation>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    // paddingTop:'5%',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
