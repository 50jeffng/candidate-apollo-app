import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Input,CheckBox} from 'react-native-elements';
import * as NavigationTypes from './navigationTypes';
import { Text as EText, Button, Icon } from 'react-native-elements';
import CreateForm from './CreateForm';

const CandidateCreateForm = (props: {
    route: NavigationTypes.FormScreenRouteProp,
    navigation:NavigationTypes.ScreenNavigationProp, 
    }) => {
    const { title } = props.route.params;
    const [checked, setChecked] = useState(false);
    return (
        <CreateForm
            navigation={props.navigation}
            title={title}
        >
            <CheckBox
                title="Hired"
                checked={checked}
                onPress={() => setChecked(!checked)}
                size={32}
                containerStyle={styles.checkBoxContainer}
            />
        </CreateForm>
    )
};

const styles = StyleSheet.create({
    checkBoxContainer:{
        backgroundColor:'white',
        borderWidth: 0,
        elevation: 0,
        marginBottom: "4%",
    },
});

export default CandidateCreateForm;