import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack'
import NavigationScreen from './NavigationScreen';
import CandidateCreateForm from './CandidateCreateForm';
import SkillCreateForm from './SkillCreateForm';
import Profile from './Profile';
import * as NavigationTypes from './navigationTypes'

const Stack = createStackNavigator();
// Constants for Stack
const initialRouteName = "Home";
const stackScreenOption:StackNavigationOptions = {
  headerShown: false, 
  cardStyle: {backgroundColor: 'white'},
}

const homeInitialParams = { candIsRefreshed: false, skillIsRefreshed: false}

const AppMainStack = () => {
  return (
    <React.Fragment>
      <Stack.Navigator initialRouteName={initialRouteName} screenOptions={stackScreenOption}>
        <Stack.Screen
          name={initialRouteName}
          component={NavigationScreen}
          initialParams={homeInitialParams}
        />
        <Stack.Screen name="CandidateForm" component={CandidateCreateForm}/>
        <Stack.Screen name="SkillForm" component={SkillCreateForm}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
});

export default AppMainStack;
