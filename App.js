import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import DrawerNavigator from './src/navigations/DrawNavigator';
import SplashScreen from 'react-native-splash-screen';
class App extends Component {
  async componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }
  render() {
    return (
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <DrawerNavigator />
        </SafeAreaView>
      </NavigationContainer>
    );
  }
}

export default App;
