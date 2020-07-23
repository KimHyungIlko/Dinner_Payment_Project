import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableRipple,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import routes from '../../../routes';
import axios from 'react-native-axios';
// 식당 리스트
const RetCard = ({retInfo, navigation}) => {
  console.log('retcard: ', retInfo);
  return (
    <Card>
      <Card.Content
        style={{
          position: 'absolute',
          width: '100%',
          height: 50,
          zIndex: 1,
          backgroundColor: 'black',
          opacity: 0.5,
        }}></Card.Content>

      <Card.Content
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: 2,
        }}>
        <Title style={{color: 'white'}}>{retInfo.name}</Title>
      </Card.Content>
      <Card.Cover source={{uri: retInfo.ret_img}} />
      <Card style={{flexDirection: 'row'}}></Card>
      <Card.Actions style={{justifyContent: 'space-between'}}>
        <Paragraph>매출액 : {retInfo.profit}</Paragraph>

        <View style={{flexDirection: 'row'}}>
          <Paragraph>결제하기</Paragraph>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(routes.Req_Pay, {
                image: retInfo.ret_img,
                name: retInfo.name,
              })
            }
            style={styles.button}>
            <AntDesign name="arrowright" color="black" size={15} />
          </TouchableOpacity>
        </View>
      </Card.Actions>
    </Card>
  );
};

class Ret_ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {datas: []};
  }

  async componentDidMount() {
    let datas = await axios.get('http://54.180.86.174/restaurants');
    // console.log('ret listScreen', datas.data);
    this.setState({datas: datas.data});
  }
  render() {
    //console.log('//////////////////', this.state);
    const {datas} = this.state;
    const {navigation} = this.props;
    return (
      <ScrollView>
        {/* <Button
          title="Go to 결제 요청 Screen"
          onPress={() => navigation.navigate(routes.Req_Pay)}
        /> */}

        {datas.map((data) => {
          return (
            <RetCard key={data.id} retInfo={data} navigation={navigation} />
          );
        })}
      </ScrollView>
    );
  }
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    marginTop: 0,
  },
  bar: {
    flex: 1,
  },
  ImageBackground: {
    width: width * 0.4,
    height: width * 0.2,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 25,
    left: 5,
  },
  flatList: {
    flex: 1,
    marginTop: 10,
    width: width * 0.89,
    justifyContent: 'center',
    marginLeft: 15,
  },
  item: {
    flex: 1,
    height: 200,
    paddingVertical: 10,
    paddingHorizontal: 10,
    //flexDirection: 'row',
    borderRadius: 10,
  },
  image_container: {
    width: width * 0.8,
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  rating: {
    marginTop: 5,
    flexDirection: 'row',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  price: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 50,
    borderRadius: 50,
  },
  textprice: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Ret_ListScreen;
