import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';


import * as utils from './utils';
import CandidatesList from './CandidatesList';
import FilterSearchBar from './FilterSearchBar';

const candidateSearchFunc = ()=>{};

const CandidatesScreen = () => {
  return (
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

export default CandidatesScreen;
