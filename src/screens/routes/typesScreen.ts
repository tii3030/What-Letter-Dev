import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from './rootList';

export type LoginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type DetailsScreenProp = StackNavigationProp<RootStackParamList, 'Details'>;