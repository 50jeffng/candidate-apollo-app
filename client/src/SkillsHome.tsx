import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import FilterSearchBar from './FilterSearchBar';
import SkillsList from './SkillsList';
import SharedFAB from './SharedFAB';
import * as Colors from './colors';
import * as NavigationTypes from './navigationTypes';


const skillSearchFunc = ()=>{};
const skillFormParam = {
    title: "Create Skill",
}

const SkillsHome = (props: {navigation: NavigationTypes.ScreenNavigationProp}) => {
  return (
    <React.Fragment>
      <View style={styles.screenContainter}>
          <FilterSearchBar
              placeholder="Search skills..."
              searchFunc={skillSearchFunc}
          />
          <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}
              contentContainerStyle={styles.scrollViewContentContainer}>
              <View style={styles.body}>
                  <SkillsList
                    title="Skills"
                  />
              </View>
          </ScrollView>
      </View>
      <SharedFAB
        onPressFunc={()=>{props.navigation.navigate('SkillForm', skillFormParam)}}
        backgroundColor={Colors.screenThemes.skills}
      />
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

export default SkillsHome;
