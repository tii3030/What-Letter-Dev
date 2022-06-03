import React from 'react';
import { View } from 'react-native';
import Routes from './src/screens/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>

  );
};

export default App;
