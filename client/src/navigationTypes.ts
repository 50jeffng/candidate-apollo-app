import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Form: { title: string };
};

export type FormScreenRouteProp = RouteProp<RootStackParamList, 'Form'>;

export type FormScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

export type Props = {
  route: FormScreenRouteProp;
  navigation: FormScreenNavigationProp;
};