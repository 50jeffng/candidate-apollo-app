import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack'
import NavigationScreen from './NavigationScreen';
import CandidateCreateForm from './CandidateCreateForm'
import SkillCreateForm from './SkillCreateForm'

const Stack = createStackNavigator();
// Constants for Stack
const initialRouteName = "Home";
const stackScreenOption:StackNavigationOptions = {
  headerShown: false, 
  cardStyle: {backgroundColor: 'white'},
}

const AppMainStack = () => {
  return (
    <React.Fragment>
      <Stack.Navigator initialRouteName={initialRouteName} screenOptions={stackScreenOption}>
        <Stack.Screen
          name={initialRouteName}
          component={NavigationScreen}
        />
        <Stack.Screen name="CandidateForm" component={CandidateCreateForm}/>
        <Stack.Screen name="SkillForm" component={SkillCreateForm}/>
      </Stack.Navigator>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
});

export default AppMainStack;
