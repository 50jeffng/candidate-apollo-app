import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';


import * as utils from './utils';
import CandidatesList from './CandidatesList';
import FilterSearchBar from './FilterSearchBar';
import SharedFAB from './SharedFAB';
import * as Colors from './colors';
import {createStackNavigator} from '@react-navigation/stack'
import CandidatesHome from './CandidatesHome';
import CandidateCreateForm from './CandidateCreateForm'

const Stack = createStackNavigator();

const CandidatesScreen = () => {
  return (
    <React.Fragment>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={CandidatesHome}
        />
        <Stack.Screen name="Form" component={CandidateCreateForm}/>
      </Stack.Navigator>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  screenContainter: {
    flex:1,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  scrollViewContentContainer: {
    paddingVertical:'5%',
  },
  body: {
    backgroundColor: 'white',
  },
});

export default CandidatesScreen;
