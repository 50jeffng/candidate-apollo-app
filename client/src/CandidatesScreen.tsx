import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';


import * as utils from './utils';
import CandidatesList from './CandidatesList';
import CandidateSearchBar from './CandidateSearchBar';

const App = () => {
  return (
        <View style={styles.screenContainter}>
            <CandidateSearchBar></CandidateSearchBar>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContentContainer}>
                <View style={styles.body}>
                    <CandidatesList
                        serverUrl= {utils.getAndroidServerURL()}
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

export default App;
