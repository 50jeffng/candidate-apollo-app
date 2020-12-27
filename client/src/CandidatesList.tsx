import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import CandidatesDisplay from './CandidatesDisplay';

type Candidate = {
    id: string, 
    name: string, 
    description: string, 
    skills: Array<string>
}

const CandidatesList = (prop: {serverUrl: string}) => {
    const [data, setData] = useState<Candidate[]>([]);
    const getData = () => {
        return fetch(prop.serverUrl + '/graphql?query={candidates{id,name,description,skills{name}}}')
            .then((response) => response.json())
            .then((json) => {
                return json.data.candidates;
            })
            .then(data => data.forEach((e:Candidate) => setData(prevState => [...prevState, e])))
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
                <Text style={styles.listTitle}>Candidates!</Text>
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
        paddingTop:'5%',
        paddingHorizontal:'3%',
    },
    listTitle:{
        fontSize: 20,
    },
    listContent:{
        justifyContent:'space-between',
    },
  });
  
export default CandidatesList;