import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';
import * as NavigationTypes from './navigationTypes';
import { Text as EText, Button, Icon } from 'react-native-elements';
import CreateForm from './CreateForm';

const CandidateCreateForm = (props: {
    route: NavigationTypes.FormScreenRouteProp,
    navigation:NavigationTypes.FormScreenNavigationProp, 
    }) => {
    const { title } = props.route.params;
    return (
        <CreateForm
            navigation={props.navigation}
            title={title}
        >
            
        </CreateForm>
    )
};

const styles = StyleSheet.create({
    formContainer:{
        paddingVertical: '5%',
        paddingHorizontal:'3%',
    },
    formTitle:{
        marginHorizontal: '4%',
        marginBottom: '10%',
    },
    inputText:{},
    buttonContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal:'3%',
    },
    buttons:{
        margin: '2%',
    },
    backButton:{
        // alignSelf: 'flex-start',
    },
    confirmButton:{
        // alignSelf: 'flex-end',
    },
});

export default CandidateCreateForm;