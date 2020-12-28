import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {Icon} from 'react-native-elements'
import {StyleSheet, Text, View} from 'react-native'
import CandidatesScreen from './CandidatesScreen';
import SkillsScreen from './SkillsScreen';
import * as Colors from './colors';

const HomeIcon = () => <Icon name='home' type='font-awesome'/>
const HomeRoute = () => <Text>Music</Text>;

const CandidatesIcon = () => <Icon name='users' type='font-awesome'/>
const CandidatesRoute = CandidatesScreen;

const SkillsIcon = () => <Icon name='lightbulb-o' type='font-awesome'/>
const SkillsRoute = SkillsScreen;

const AboutIcon = () => <Icon name='info' type='font-awesome'/>
const AboutRoute = () => <Text>test</Text>;

const Navigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: HomeIcon, color: Colors.screenThemes.home},
    { key: 'candidates', title: 'Candidates', icon: CandidatesIcon, color: Colors.screenThemes.candidates},
    { key: 'skills', title: 'Skills', icon: SkillsIcon, color: Colors.screenThemes.skills},
    { key: 'about', title: 'About', icon: AboutIcon, color: Colors.screenThemes.about},
  ]);

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

export default Navigation;