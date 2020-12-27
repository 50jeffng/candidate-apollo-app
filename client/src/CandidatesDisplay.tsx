import React, {useState, useEffect} from 'react';
import { View, Button, Text } from 'react-native';
import Card from './Card';

const CandidatesDisplay = (prop: {id: string, name: string, description: string, skills: Array<string>}) => {
    // const [candidate, setCandidate] = useState({});
    
    useEffect(()=>{
        
        // setData(prevState => {
        //     return {prevState, data: getData()}
        // });
    });
    return (
        <View>
            <Card>
                <Text>`Candidate`</Text>
                <Text>`id: {prop.id}`</Text>
                <Text>`name: {prop.name}`</Text>
                <Text>`description: {prop.description}`</Text>
            </Card>
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
  
export default CandidatesDisplay;