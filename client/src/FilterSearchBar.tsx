import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

const FilterSearchBar = (props: {placeholder:string, searchFunc:(text:string) => void}) => {
    const [search, setSearch] = useState('');
    return (
        <View style={styles.searchBar}>
            <SearchBar
                placeholder={props.placeholder}
                onChangeText={text => {
                    props.searchFunc(text);
                    setSearch(text);
                }}
                onClear={() => {
                    props.searchFunc('');
                    setSearch('');
                }}
                value={search}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    searchBar:{},
});

export default FilterSearchBar;