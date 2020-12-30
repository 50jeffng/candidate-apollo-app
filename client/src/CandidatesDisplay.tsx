import React, {useState, useEffect} from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import Card from './Card';
import * as NavigationTypes from './navigationTypes';

const CandidatesDisplay = (props: {navigation: NavigationTypes.ScreenNavigationProp, id: string, name: string, description: string, skills: Array<string>}) => {
    // const [candidate, setCandidate] = useState({});
    const candidateProfileParam = {
        id: props.id,
        type: "Candidate",
    }
    const onPressCard = () => {props.navigation.navigate("Profile", candidateProfileParam)}
    
    useEffect(()=>{
        
        // setData(prevState => {
        //     return {prevState, data: getData()}
        // });
    });
    return (
        <TouchableOpacity onPress={onPressCard}>
            <Card>
                <Text>`Candidate`</Text>
                <Text>`id: {props.id}`</Text>
                <Text>`name: {props.name}`</Text>
            </Card>
        </TouchableOpacity>  
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