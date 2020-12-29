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
});

export const errorMsg = [styles.center, styles.wrap, styles.errorMsg];

export const loadingMsg = [styles.center, styles.wrap, styles.loadingMsg];
