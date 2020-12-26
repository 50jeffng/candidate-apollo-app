import Config from 'react-native-config';

export const getAndroidServerURL = () => {return (Config.ANDROID_HOSTURL || 'http://10.0.2.2').concat(':', Config.SERVER_PORT || '3000')}