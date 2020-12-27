import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import CandidatesDisplay from './CandidatesDisplay';
import * as types from './types';

const CandidatesList = (props: {serverUrl: string, title: string}) => {
    const [data, setData] = useState<types.Candidate[]>([]);
    const getData = () => {
        return fetch(props.serverUrl + '/graphql?query={candidates{id,name,description,skills{name}}}')
            .then((response) => response.json())
            .then((json) => {
                return json.data.candidates;
            })
            .then(data => data.forEach((e:types.Candidate) => setData(prevState => [...prevState, e])))
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
                <Text style={styles.listTitle}>{props.title}</Text>
                {data?.map(candidate => <CandidatesDisplay 
                    key = {candidate.id}
                    {...candidate}
                />)}
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
        fontSize: 20,
        marginHorizontal: '4%',
    },
    listContent:{
        justifyContent:'space-between',
    },
  });
  
export default CandidatesList;