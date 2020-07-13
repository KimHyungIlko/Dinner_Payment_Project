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
          'data:image/jpeg;base64,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',
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
            <RetCard key={data.image} retInfo={data} navigation={navigation} />
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
