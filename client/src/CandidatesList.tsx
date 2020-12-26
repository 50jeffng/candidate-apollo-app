import React, {useState, useEffect} from 'react';
import { View, Button, Text } from 'react-native';
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
        <View>
            <Text>Candidates!</Text>
            {data?.map(candidate => <CandidatesDisplay 
                key = {candidate.id}
                {...candidate}
            />)}
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
  
export default CandidatesList;