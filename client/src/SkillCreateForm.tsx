import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';
import * as NavigationTypes from './navigationTypes';
import { Text as EText, Button, Icon } from 'react-native-elements';
import CreateForm from './CreateForm';

const TypeIcon = <Icon name='cubes' type='font-awesome'/>;

const SkillCreateForm = (props: {
    route: NavigationTypes.FormScreenRouteProp,
    navigation:NavigationTypes.ScreenNavigationProp, 
    }) => {
    const { title } = props.route.params;
    const [typeInputText, setTypeInputText] = useState('');
    return (
        <CreateForm
            navigation={props.navigation}
            title={title}
        >
            <Input
                placeholder="Type"
                leftIcon={TypeIcon}
                style={styles.inputText}
                value={typeInputText}
                onChangeText={value => setTypeInputText(value)}
            />
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

export default SkillCreateForm;