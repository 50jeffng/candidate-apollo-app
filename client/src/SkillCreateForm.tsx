import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Input,Text} from 'react-native-elements';
import * as NavigationTypes from './navigationTypes';
import { Text as EText, Button, Icon } from 'react-native-elements';
import CreateForm from './CreateForm';
import * as Mutation from './gqlMutations';
import { useMutation } from '@apollo/client';
import * as CommonStyles from './commonStyles';

const TypeIcon = <Icon name='cubes' type='font-awesome'/>;

const SkillCreateForm = (props: {
    route: NavigationTypes.FormScreenRouteProp,
    navigation:NavigationTypes.ScreenNavigationProp, 
    }) => {
    const { title } = props.route.params;
    const [typeInputText, setTypeInputText] = useState('');
    const [createSkill, { data, loading: mutationLoading, error: mutationError }] = useMutation(Mutation.CREATE_SKILL);

    const onConfirmForm = (name: string, description: string) => {
        createSkill({variables: {name:name, description:description, type:typeInputText}})
    };
    
    return (
        <React.Fragment>
            <CreateForm
                navigation={props.navigation}
                title={title}
                mutationFunc={onConfirmForm}
            >
                <Input
                    placeholder="Type"
                    leftIcon={TypeIcon}
                    style={styles.inputText}
                    value={typeInputText}
                    onChangeText={value => setTypeInputText(value)}
                />
            </CreateForm>
            <View style={CommonStyles.styles.center}>
                {mutationLoading && <Text style={CommonStyles.loadingMsg}>Loading...</Text>}
                {mutationError && <Text style={CommonStyles.errorMsg}>Error: {mutationError.message}</Text>}
                {(data && data.createSkill) && <Text style={CommonStyles.confirmationMsg}>Sent!</Text>}
            </View>
        </React.Fragment>
        
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