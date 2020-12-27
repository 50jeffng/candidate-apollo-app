import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import { Tile } from 'react-native-elements';
const widthDiv = 2.5;

const baseTile = (width: number, title: string) => {
    return(
        <View style={styles.tiles}>
            <Tile
                featured
                imageSrc={require('../img/tileplaceholder.jpg')}
                title={title}
                width={width/widthDiv}/>
        </View>
    )
}

const TilesList = (props: {}) => {
    const [width] = useState(Dimensions.get('window').width);
    return (
        <View style={styles.container}>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-evenly',
    },
    tiles: {
        paddingVertical: '2%',
        paddingHorizontal: '2%',
    },
});

export default TilesList;