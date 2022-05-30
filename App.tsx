import React from 'react';
import { View } from 'react-native';
import Routes from './src/screens/routes/routes';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
