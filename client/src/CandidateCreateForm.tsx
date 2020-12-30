import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input,CheckBox} from 'react-native-elements';
import * as NavigationTypes from './navigationTypes';
import { Text as EText, Button, Icon } from 'react-native-elements';
import CreateForm from './CreateForm';
import * as Mutation from './gqlMutations';
import { useMutation } from '@apollo/client';
import * as CommonStyles from './commonStyles';

const CandidateCreateForm = (props: {
    route: NavigationTypes.FormScreenRouteProp,
    navigation:NavigationTypes.ScreenNavigationProp, 
    }) => {
    const { title } = props.route.params;
    const [checked, setChecked] = useState(false);
    const [createCandidate, { data, loading: mutationLoading, error: mutationError }] = useMutation(Mutation.CREATE_CANDIDATE);

    const onBackCandidates = () => {
        props.navigation.navigate("Home", {candIsRefreshed: true, skillIsRefreshed:false})
    }
    const onConfirmForm = (name: string, description: string) => {
        createCandidate({variables: {name:name, description:description, isHired:checked}})
    };

    return (
        <React.Fragment>
            <CreateForm
                navigation={props.navigation}
                title={title}
                onBackFunc={onBackCandidates}
                mutationFunc={onConfirmForm}
            >
                <CheckBox
                    title="Hired"
                    checked={checked}
                    onPress={() => setChecked(!checked)}
                    size={32}
                    containerStyle={styles.checkBoxContainer}
                />
                <View style={CommonStyles.styles.center}>
                    {mutationLoading && <Text style={CommonStyles.loadingMsg}>Loading...</Text>}
                    {mutationError && <Text style={CommonStyles.errorMsg}>Error: {mutationError.message}</Text>}
                    {(data && data.createCandidate) && <Text style={CommonStyles.confirmationMsg}>Sent!</Text>}
                </View>
            </CreateForm>
        </React.Fragment>
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