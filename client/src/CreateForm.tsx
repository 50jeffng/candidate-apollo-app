import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';
import { Text as EText, Button, Icon } from 'react-native-elements';
import * as NavigationTypes from './navigationTypes';

const NameIcon = <Icon name='id-card' type='font-awesome'/>;
const DescriptionIcon = <Icon name='file-text-o' type='font-awesome'/>;
const BackIcon = <Icon name='arrow-left' type='font-awesome'/>;

const CreateForm = (props: {
        navigation:NavigationTypes.FormScreenNavigationProp, 
        title: string,
        children: React.ReactNode,
    }) => {
    const [inputText, setInputText] = useState({comment: ''});
    return (
        <View style={styles.formContainer}>
            <EText h2 style={styles.formTitle}>{props.title}</EText>
            <Input
                placeholder="Name"
                leftIcon={NameIcon}
                style={styles.inputText}
                value={inputText.comment}
                onChangeText={value => setInputText({ comment: value })}
            />
            <Input
                placeholder="Description"
                leftIcon={DescriptionIcon}
                style={styles.inputText}
                value={inputText.comment}
                onChangeText={value => setInputText({ comment: value })}
            />
            {props.children}
            {/* <Input
                placeholder="Name"
                leftIcon={NameIcon}
                style={styles.inputText}
                value={inputText.comment}
                onChangeText={value => setInputText({ comment: value })}
            /> */}
            <View style={styles.buttonContainer}>
                <Button 
                    title="Go back"
                    type="outline"
                    icon={BackIcon}
                    style={[styles.buttons, styles.backButton]}
                    onPress={()=>{props.navigation.goBack()}}
                />
                <Button 
                    title="Confirm"
                    type="solid"
                    style={[styles.buttons, styles.confirmButton]}
                />
            </View>
            
        </View>
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

export default CreateForm;