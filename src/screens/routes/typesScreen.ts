import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from './rootList';

export type TestScreenProp = StackNavigationProp<RootStackParamList, 'Test'>;
export type ToTrainScreenProp = StackNavigationProp<RootStackParamList, 'ToTrain'>;
