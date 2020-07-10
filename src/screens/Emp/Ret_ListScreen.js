import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Card, Paragraph, Title} from 'react-native-paper';

// 식당 리스트
const RetCard = ({retInfo}) => {
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
        {/* <Paragraph>Card content</Paragraph> */}
      </Card.Content>
      <Card.Cover source={{uri: retInfo.img}} />
      <Card.Actions>
        <Button>Ok</Button>
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
        img:
          'https://image.chosun.com/sitedata/image/201903/06/2019030601012_0.jpg',
      },
      {
        name: 'restaurant2',
        profit: 2000,
        img:
          'https://lh3.googleusercontent.com/proxy/0FC-c_8lpL96I2qu7pKKg5hqGRdowfOhC6sm1NpE00nFGPl_kUM5X99pzXn5RbBiXWg-dZTR1LuznQWXROogdaYD_pTvGwhNpJXTqRK2mCIv0IpA1i7m2j1qDzcLd-8DxUIWalgNoEsQy0HVeMaeJLAm03vxpH6zSOQ8zg',
      },
      {
        name: 'restaurant3',
        profit: 5000,
        img:
          'https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2016/03/29/c_km601/911811_540.jpg',
      },
    ];

    const {navigation} = this.props;
    return (
      <ScrollView>
        {/* <Button
          title="Go to 결제 요청 Screen"
          onPress={() => navigation.navigate(routes.Req_Pay)}
        /> */}

        {datas.map((data) => {
          return <RetCard retInfo={data} />;
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Ret_ListScreen;
