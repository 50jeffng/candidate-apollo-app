import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import { Tile } from 'react-native-elements';
const widthDiv = 2.5;

const BaseTile = (props: {id: string, width: number, title: string, onPressFunc: (id:string)=>void}) => {
    return(
        <View style={styles.tiles}>
            <Tile
                featured
                imageSrc={require('../img/tileplaceholder.jpg')}
                title={props.title}
                width={props.width/widthDiv}
                onPress={()=> props.onPressFunc(props.id)}
            />
        </View>
    )
}

const TilesList = (props: {data:any[], tileOnPressFunc: (id:string)=>void}) => {
    const [width] = useState(Dimensions.get('window').width);
    return (
        <View style={styles.tileContainer}>
            {props.data?.map(e => <BaseTile 
                    key = {e.id}
                    id = {e.id}
                    width={width}
                    title={e.name}
                    onPressFunc={props.tileOnPressFunc}/>)}
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