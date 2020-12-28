import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import * as utils from './utils';
import FilterSearchBar from './FilterSearchBar';
import SkillsList from './SkillsList';
import SharedFAB from './SharedFAB';
import * as Colors from './colors';


const skillSearchFunc = ()=>{};

const SkillsScreen = () => {
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
                    serverUrl= {utils.getAndroidServerURL()}
                    title="Skills"
                  />
              </View>
          </ScrollView>
      </View>
      <SharedFAB
        onPressFunc={()=>{}}
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

export default SkillsScreen;
