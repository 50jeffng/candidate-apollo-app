import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import TilesList from './TilesList';


import * as utils from './utils';
import FilterSearchBar from './FilterSearchBar';
const skillSearchFunc = ()=>{};

const SkillsScreen = () => {
  return (
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
                    <TilesList
                    ></TilesList>
                </View>
            </ScrollView>
        </View>
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
