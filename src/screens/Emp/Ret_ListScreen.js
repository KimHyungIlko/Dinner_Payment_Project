import React, {Component} from 'react';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Button,
  Card,
  Paragraph,
  Title,
  TouchableRipple,
} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import routes from '../../../routes';

// 식당 리스트
const styles_RetCard = StyleSheet.create({
  card: {
    marginHorizontal: '2%',
    marginVertical: '2%',
  },

  card_content: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  card_content__title: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// ver1
// const RetCard = ({retInfo, navigation}) => {
//   return (
//     <Card style={styles_RetCard.card}>
//       <Card.Title title={retInfo.name} />
//       <Card.Cover source={{uri: retInfo.image}} />

//       <Card.Actions style={{display: 'flex', justifyContent: 'flex-end'}}>
//         <TouchableRipple
//           onPress={() =>
//             navigation.navigate(routes.Req_Pay, {
//               image: retInfo.image,
//               name: retInfo.name,
//             })
//           }
//           rippleColor="rgba(0, 0, 0, .32)"
//           centered={true}>
//           <AntDesign name="arrowright" color="black" size={15} />
//           {/* <Button>이동</Button> */}
//         </TouchableRipple>
//       </Card.Actions>
//     </Card>
//   );
// };

// ver2
const RetCard = ({retInfo, navigation}) => {
  return (
    <Card style={styles_RetCard.card}>
      <Card.Content
        style={{
          paddingHorizontal: 0,
          paddingTop: 0,
        }}>
        <Card.Content style={styles_RetCard.card_content}>
          <Title style={styles_RetCard.card_content__title}>
            {retInfo.name}
          </Title>
        </Card.Content>
        <Card.Cover source={{uri: retInfo.image}} />
      </Card.Content>

      <Card.Actions style={{display: 'flex', justifyContent: 'flex-end'}}>
        <TouchableRipple
          onPress={() =>
            navigation.navigate(routes.Req_Pay, {
              image: retInfo.image,
              name: retInfo.name,
            })
          }
          rippleColor="rgba(0, 0, 0, .32)"
          centered={true}>
          <AntDesign name="arrowright" color="black" size={15} />
        </TouchableRipple>
      </Card.Actions>
    </Card>
  );
};

class Ret_ListScreen extends Component {
  render() {
    const datas = [
      {
        name: 'restaurant1',
        profit: 1000,
        image:
          'https://image.chosun.com/sitedata/image/201903/06/2019030601012_0.jpg',
      },
      {
        name: 'restaurant2',
        profit: 2000,
        image:
          'https://lh3.googleusercontent.com/proxy/0FC-c_8lpL96I2qu7pKKg5hqGRdowfOhC6sm1NpE00nFGPl_kUM5X99pzXn5RbBiXWg-dZTR1LuznQWXROogdaYD_pTvGwhNpJXTqRK2mCIv0IpA1i7m2j1qDzcLd-8DxUIWalgNoEsQy0HVeMaeJLAm03vxpH6zSOQ8zg',
      },
      {
        name: 'restaurant3',
        profit: 5000,
        image:
          'https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2016/03/29/c_km601/911811_540.jpg',
      },
    ];

    const {navigation} = this.props;
    return (
      <ScrollView>
        {datas.map((data) => {
          return (
            <RetCard key={data.name} retInfo={data} navigation={navigation} />
          );
        })}
      </ScrollView>
    );
  }
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
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
