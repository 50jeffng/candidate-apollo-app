import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as NavigationTypes from './navigationTypes';
import { Text as EText, Button, Icon } from 'react-native-elements';
import * as Query from './gqlQueries';
import { useQuery } from '@apollo/client';
import * as CommonStyles from './commonStyles';

const BackIcon = <Icon name='arrow-left' type='font-awesome'/>;

const Profile = (props: {
    route: NavigationTypes.ProfileScreenRouteProp,
    navigation:NavigationTypes.ScreenNavigationProp, 
    }) => {
    const { id, type } = props.route.params;
    
    const {loading, error, data} = useQuery(type === "Candidate" ? Query.CANDIDATE: Query.SKILL, {
        variables: {id: id},
    });

    if (loading) return <Text style={CommonStyles.loadingMsg}>Loading...</Text>;
    if (error) return <Text style={CommonStyles.errorMsg}>Error: {error.message}</Text>;
    if (data) {
        const dataObj = type === "Candidate" ? data.candidate: data.skill;
        const fieldKeys= Object.keys(dataObj)
                            .filter(e => e !=="__typename");
        const fieldNames= fieldKeys.map(e=>e.charAt(0).toUpperCase() + e.slice(1));

        return(
            <View style={styles.container}>
                {type === "Candidate" ? <EText h2 style={styles.fieldTitle}>Candidate</EText>: <EText h2>Skill</EText> }
                {fieldKeys.map((e: string, index: number) => {
                    return(
                    <View style={styles.fieldView}  key = {e + dataObj.id}>
                        <EText h4 style={styles.fieldName}>{fieldNames[index] + ':'}</EText>
                        <Text style={styles.fieldValue}>{dataObj[e]}</Text>
                    </View>)
                    })
                }
                <Button 
                    title="Go back"
                    type="outline"
                    icon={BackIcon}
                    containerStyle={[styles.backButton]}
                    onPress={()=>{props.navigation.goBack()}}
                />
            </View>
        )
    }
    else {
        return null;
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal:'6%',
        marginVertical:'6%',
    },
    fieldView:{
        flexDirection: 'column',
        marginLeft: '3%',
    },
    fieldTitle:{
        marginBottom: '3%',
    },
    fieldName:{
        marginVertical: '3%',
    },
    fieldValue:{
        marginLeft: '3%',
    },
    backButton:{
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom:0,
        left:0,
    },
});

export default Profile;