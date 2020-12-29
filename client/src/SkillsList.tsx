import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { accessibilityProps } from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import TilesList from './TilesList';
import * as types from './modelTypes';

const SkillsList = (props: {serverUrl: string, title: string}) => {
    const [data, setData] = useState<types.Skill[]>([]);
    const getData = () => {
        return fetch(props.serverUrl + '/graphql?query={skills{id,name,description,type}}')
            .then((response) => response.json())
            .then((json) => {
                return json.data.skills;
            })
            .then(data => data.forEach((e:types.Skill) => setData(prevState => [...prevState, e])))
            .catch((error) => {
                console.error(error);
                return error;
            });
    };

    useEffect(()=>{
        getData();
        return () => setData([]);
    }, []);
    return (
        <View style={styles.list}>
            <View style={styles.listContent}>
                <Text h3 style={styles.listTitle}>{props.title}</Text>
                <TilesList
                    data={data}
                />
            </View>
        </View>
    );
};
  
  const styles = StyleSheet.create({
    list:{
        flexDirection:'column',
        flex:1,
        alignItems:'stretch',
        paddingHorizontal:'3%',
    },
    listTitle:{
        marginHorizontal: '4%',
    },
    listContent:{
        justifyContent:'space-between',
    },
  });
  
export default SkillsList;