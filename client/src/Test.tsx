import React, {useState, useEffect} from 'react';
import { View, Button, Text } from 'react-native';
import * as g from './constants';

const Test = (prop: {data: string}) => {
    const [data, setData] = useState(prop.data);
    const getData = () => {
        return fetch(g.ANDROIDLOCALHOST + '/test')
            .then((response) => response.json())
            .then((json) => {
                return json.data;
            })
            .then((data) => setData(data))
            .catch((error) => {
                console.error(error);
                return error;
            });
    };
    useEffect(()=>{
        
        // setData(prevState => {
        //     return {prevState, data: getData()}
        // });
    });
    return (
        <View>
            <Text>Data received: {data}</Text>
            <Button
                title="click pls"
                onPress={()=>getData()}
            />
        </View>
    );
};
  
//   const styles = StyleSheet.create({
//     scrollView: {
//       backgroundColor: Colors.lighter,
//     },
//     engine: {
//       position: 'absolute',
//       right: 0,
//     },
//     body: {
//       backgroundColor: Colors.white,
//     },
//     sectionContainer: {
//       marginTop: 32,
//       paddingHorizontal: 24,
//     },
//     sectionTitle: {
//       fontSize: 24,
//       fontWeight: '600',
//       color: Colors.black,
//     },
//     sectionDescription: {
//       marginTop: 8,
//       fontSize: 18,
//       fontWeight: '400',
//       color: Colors.dark,
//     },
//     highlight: {
//       fontWeight: '700',
//     },
//     footer: {
//       color: Colors.dark,
//       fontSize: 12,
//       fontWeight: '600',
//       padding: 4,
//       paddingRight: 12,
//       textAlign: 'right',
//     },
//   });
  
export default Test;