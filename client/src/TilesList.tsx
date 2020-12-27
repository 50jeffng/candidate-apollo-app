import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import { Tile } from 'react-native-elements';
const widthDiv = 2.5;

const BaseTile = (props: {width: number, title: string}) => {
    return(
        <View style={styles.tiles}>
            <Tile
                featured
                imageSrc={require('../img/tileplaceholder.jpg')}
                title={props.title}
                width={props.width/widthDiv}/>
        </View>
    )
}

const TilesList = (props: {data:any[]}) => {
    const [width] = useState(Dimensions.get('window').width);
    return (
        <View style={styles.tileContainer}>
            {props.data?.map(e => <BaseTile 
                    width={width}
                    title={e.name}/>)}
        </View>
    )
};

const styles = StyleSheet.create({
    tileContainer: {
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