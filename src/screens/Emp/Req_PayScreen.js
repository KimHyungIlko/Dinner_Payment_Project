import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions,
  Animated,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {Button, Dialog, Portal, Paragraph, Provider} from 'react-native-paper';
import SlidingUpPanel from 'rn-sliding-up-panel';

const {height, width} = Dimensions.get('window');

class Req_PayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.route.params.name,
      image: this.props.route.params.image,
      people: 1,
      price: 0,
      visible: false,
      index: 0,
    };
  }

  static defaultProps = {
    draggableRange: {top: height * 0.7, bottom: 70},
  };

  _draggedValue = new Animated.Value(70);

  render() {
    const {top, bottom} = this.props.draggableRange;

    const textTranslateY = this._draggedValue.interpolate({
      inputRange: [bottom, top * 0.7],
      outputRange: [0, 5],
      extrapolate: 'clamp',
    });

    const textTranslateX = this._draggedValue.interpolate({
      inputRange: [bottom, top * 0.7],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });

    const textScale = this._draggedValue.interpolate({
      inputRange: [bottom, top * 0.7],
      outputRange: [1, 0.7],
      extrapolate: 'clamp',
    });
    console.log('높이값: ', height);
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: 'red',
          }}>
          <ImageBackground
            style={{justifyContent: 'center', height: 300, width: width}}
            source={{uri: this.state.image}}></ImageBackground>
        </View>

        <SlidingUpPanel
          ref={(c) => (this._panel = c)}
          draggableRange={this.props.draggableRange}
          animatedValue={this._draggedValue}
          height={height * 0.7}
          friction={0.7}
          backdropOpacity={0.3}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <Animated.View
                style={{
                  transform: [
                    {translateY: textTranslateY},
                    {translateX: textTranslateX},
                    {scale: textScale},
                  ],
                }}>
                <Text style={styles.textHeader}>결제하기</Text>
              </Animated.View>
            </View>
            <View style={styles.container}>
              <Text>Bottom sheet content</Text>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  panelHeader: {
    height: 80,
    backgroundColor: '#ECB03E',
    padding: 15,
  },
  textHeader: {
    fontSize: 28,
    color: '#FFF',
  },
});
export default Req_PayScreen;
