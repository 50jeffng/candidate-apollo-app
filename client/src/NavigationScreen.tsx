import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {Icon} from 'react-native-elements'
import {StyleSheet, Text, View} from 'react-native'
import CandidatesHome from './CandidatesHome';
import SkillsHome from './SkillsHome';
import * as Colors from './colors';
import * as NavigationTypes from './navigationTypes'

// BottomNavigation icons
const HomeIcon = () => <Icon name='home' type='font-awesome'/>;
const CandidatesIcon = () => <Icon name='users' type='font-awesome'/>;
const SkillsIcon = () => <Icon name='lightbulb-o' type='font-awesome'/>;
const AboutIcon = () => <Icon name='info' type='font-awesome'/>;


const NavigationScreen = (props: {route: NavigationTypes.HomeScreenRouteProp, navigation: NavigationTypes.ScreenNavigationProp}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: HomeIcon, color: Colors.screenThemes.home},
    { key: 'candidates', title: 'Candidates', icon: CandidatesIcon, color: Colors.screenThemes.candidates},
    { key: 'skills', title: 'Skills', icon: SkillsIcon, color: Colors.screenThemes.skills},
    { key: 'about', title: 'About', icon: AboutIcon, color: Colors.screenThemes.about},
  ]);

  // Navigation Scenes
  const HomeRoute = () => <Text>Music</Text>;

  const CandidatesRoute = () => <CandidatesHome route={props.route} navigation={props.navigation}/>;

  const SkillsRoute = () => <SkillsHome route={props.route} navigation={props.navigation}/>;

  const AboutRoute = () => <Text>test</Text>;

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    candidates: CandidatesRoute,
    skills: SkillsRoute,
    about: AboutRoute,
  });

  return (
    <BottomNavigation
        shifting={true}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        activeColor='black'
    />
  );
};

// const styles = StyleSheet.create({
//     navigationTitle: {
//             color:'black',
//     },
// });

export default NavigationScreen;