import React, {Component} from 'react';
import {StyleSheet, ImageBackground, Text, View, Image} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Image
          source={require('../../../image/logo.png')}
          style={styles.image}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F3D599',
  },
  image: {
    flex: 1,
    width: 400,
    height: 440,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
