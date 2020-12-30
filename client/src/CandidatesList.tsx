import { useQuery } from '@apollo/client';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Text as EText } from 'react-native-elements';
import CandidatesDisplay from './CandidatesDisplay';
import * as types from './modelTypes';
import * as Query from './gqlQueries';
import * as CommonStyles from './commonStyles';
import * as NavigationTypes from './navigationTypes';

const CandidatesList = (props: {navigation: NavigationTypes.ScreenNavigationProp, title: string, isRefreshed: boolean}) => {
    const {loading, error, data, refetch} = useQuery(Query.CANDIDATES);
    if (loading) return <Text style={CommonStyles.loadingMsg}>Loading...</Text>;
    if (error) return <Text style={CommonStyles.errorMsg}>Error: {error.message}</Text>;

    if(props.isRefreshed) refetch();
    
    // const [data, setData] = useState<types.Candidate[]>([]);
    // const getData = () => {
    //     return fetch(props.serverUrl + '/graphql?query={candidates{id,name,description,skills{name}}}')
    //         .then((response) => response.json())
    //         .then((json) => {
    //             return json.data.candidates;
    //         })
    //         .then(data => data.forEach((e:types.Candidate) => setData(prevState => [...prevState, e])))
    //         .catch((error) => {
    //             console.error(error);
    //             return error;
    //         });
    // };

    // useEffect(()=>{
    //     getData();
    //     return () => setData([]);
    // }, []);
    return (
        <View style={styles.list}>
            <View style={styles.listContent}>
                <EText h3 style={styles.listTitle}>{props.title}</EText>
                {data.candidates.map((candidate: types.Candidate) => <CandidatesDisplay 
                    navigation={props.navigation}
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
        marginHorizontal: '4%',
    },
    listContent:{
        justifyContent:'space-between',
    },
  });
  
export default CandidatesList;