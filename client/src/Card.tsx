import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';

const Card = (props: {children: React.ReactNode}) => {
    return (
        <View style={styles.card}>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={()=>{}}
            >
                <View style={styles.cardContent}>
                    { props.children }
                </View>
            </TouchableHighlight>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        overflow: 'hidden',
        borderRadius: 15,
        elevation: 5,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 10,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
});

export default Card;