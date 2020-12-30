import { fromPromise } from '@apollo/client';
import React from 'react';
import {StyleSheet, View, Linking} from 'react-native';
import {Text} from 'react-native-elements'
import {name as appName} from '../app.json';

const About = () => {
    return(
        <View style={styles.container}>
            <Text h1>About :)</Text>
            <Text h4>App name: {appName}</Text>
            <Text h3 style={styles.link}
                onPress={()=> Linking.openURL('https://github.com/50jeffng/candidate-apollo-app')}
            >
                This app's code on Github!
            </Text>
            <Text h4>Woah dejavu :o</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        marginVertical: '4%',
        marginHorizontal: '4%',
    },
    link:{
        textDecorationLine: 'underline',
        color:'blue',
    },
  });

export default About;