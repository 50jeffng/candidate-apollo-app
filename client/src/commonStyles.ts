import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrap: {
        flex: 1,
        flexWrap: 'wrap',
    },
    errorMsg: {
        color: 'red',
    },
    loadingMsg: {
        color: 'grey',
    },
    confirmationMsg: {
        color: 'green',
    },
});

export const errorMsg = [styles.errorMsg];

export const loadingMsg = [styles.loadingMsg];

export const confirmationMsg = [styles.confirmationMsg];
