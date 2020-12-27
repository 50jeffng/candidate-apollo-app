import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

const CandidateSearchBar = () => {
    const [search, setSearch] = useState('');
    return (
        <View style={styles.searchBar}>
            <SearchBar
                placeholder="Search candidates..."
                onChangeText={text => {setSearch(text)}}
                value={search}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    searchBar:{},
});

export default CandidateSearchBar;