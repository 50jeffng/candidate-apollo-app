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
import * as NavigationTypes from './navigationTypes';

const candidateSearchFunc = ()=>{};

const CandidatesHome = (props: {navigation: NavigationTypes.FormScreenNavigationProp}) => {
    return(
      <View style={styles.screenContainter}>
        <FilterSearchBar
            placeholder="Search candidates..."
            searchFunc={candidateSearchFunc}
        />
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContentContainer}>
            <View style={styles.body}>
                <CandidatesList
                    serverUrl= {utils.getAndroidServerURL()}
                    title="Candidates"
                />
            </View>
        </ScrollView>
        <SharedFAB
          onPressFunc={()=>{props.navigation.navigate('Form', {title:"Test"})}}
          backgroundColor={Colors.screenThemes.candidates}
        />
      </View>)
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

export default CandidatesHome;
