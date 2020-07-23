import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, Image} from 'react-native';
import routes from '../../../routes';

class Confirm_ReqPayScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.route.params.name}</Text>
        <Image
          style={styles.food}
          source={{uri: this.props.route.params.image}}
        />
        <View style={styles.textline}>
          <Text style={styles.staticText}>
            {this.props.route.params.people}
          </Text>
          <Text style={styles.staticText}>명</Text>
        </View>
        <View style={styles.textline}>
          <Text style={styles.staticText}>{this.props.route.params.price}</Text>
          <Text style={styles.staticText}>원</Text>
        </View>
        <View style={styles.textline}>
          <Text style={styles.staticText2}>최종 결제 되었습니다</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'orange',
  },
  food: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9AA9FF',
    width: 230,
    height: 230,
    marginTop: 40,
    borderRadius: 120,
    borderWidth: 10,
  },
  textline: {
    height: 40,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    fontSize: 17,
  },
  staticText: {
    flexDirection: 'row',
    marginTop: 45,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  cardSpot: {
    marginTop: 50,
  },
});

export default Confirm_ReqPayScreen;
