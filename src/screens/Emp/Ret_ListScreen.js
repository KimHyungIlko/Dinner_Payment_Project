import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import routes from '../../../routes';
import axios from 'react-native-axios';
// 식당 리스트
const RetCard = ({retInfo, navigation}) => {
  console.log('retcard: ', retInfo.ret_img);
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate(routes.Req_Pay, {
          image: retInfo.ret_img,
          name: retInfo.name,
        })
      }>
      <ImageBackground
        style={styles.img_back}
        imageStyle={{borderRadius: 10, borderColor: 'gray', borderWidth: 0.5}}
        source={{uri: retInfo.ret_img}}>
        <Text style={styles.text}>{retInfo.name}</Text>
        <Text style={styles.text2}>매출: {retInfo.profit}원</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

class Ret_ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {datas: []};
  }

  async componentDidMount() {
    let datas = await axios.get('http://54.180.86.174/restaurants');
    this.setState({datas: datas.data});
  }
  render() {
    const {datas} = this.state;
    const {navigation} = this.props;
    return (
      <View style={{backgroundColor: 'white'}}>
        <ScrollView>
          {datas.map((data) => {
            return (
              <RetCard key={data.id} retInfo={data} navigation={navigation} />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    marginBottom: 5,
    alignSelf: 'center',
    height: 200,
    width: width * 0.9,
    elevation: 24,
    //backgroundColor: 'white',
    borderRadius: 10,
  },
  img_back: {flex: 1, justifyContent: 'flex-end'},
  text: {
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'flex-end',
  },
  text2: {
    marginLeft: 10,
    fontSize: 15,
    color: 'white',
    justifyContent: 'flex-end',
  },
});

export default Ret_ListScreen;
