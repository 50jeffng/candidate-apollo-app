import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: {candIsRefreshed: boolean, skillIsRefreshed: boolean};
  Profile: { id: string, type: string };
  CandidateForm: { title: string };
  SkillForm: { title: string };
};

export type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
// Both form should take the same params
export type FormScreenRouteProp = RouteProp<RootStackParamList, 'CandidateForm'>;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

// export type Props = {
//   route: FormScreenRouteProp;
//   navigation: ScreenNavigationProp;
// };