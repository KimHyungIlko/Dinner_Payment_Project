import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import DrawerNavigator from './src/navigations/DrawNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <DrawerNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
