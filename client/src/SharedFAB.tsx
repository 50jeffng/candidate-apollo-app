import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import {Icon} from 'react-native-elements'

const SharedFAB = (props: {onPressFunc: () => void, backgroundColor: string}) => (
  <FAB
    style={[styles.fab, {backgroundColor: props.backgroundColor}]}
    icon={() => <Icon name='plus' type='font-awesome'/>}
    onPress={() => props.onPressFunc}
    theme={undefined}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default SharedFAB;