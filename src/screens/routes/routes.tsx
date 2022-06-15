import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Test from '../Test/Test';

import { RootStackParamList } from './rootList';

const RootStack = createStackNavigator<RootStackParamList>();

export default function Routes() {
    return (
        <RootStack.Navigator 
            initialRouteName="Test"  
            screenOptions={{
                headerShown: false
            }}
        >
            <RootStack.Screen name="Test" component={Test} />
        </RootStack.Navigator>
  );
}