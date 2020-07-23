import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import EmpScreen from '../screens/Emp/EmpScreen';
import Emp_PayScreen from '../screens/Emp_PayDept/Emp_PayDeptScreen';
import routes from '../../routes';
import Ret_ListScreen from '../screens/Emp/Ret_ListScreen';
import Req_PayScreen from '../screens/Emp/Req_PayScreen';
import Confirm_ReqPayScreen from '../screens/Emp/Confirm_ReqPayScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ret_ProfitScreen from '../screens/Ret_Manager/Ret_ProfitScreen';

/*
    1. 메인 화면(야식도 식후경) -- home

    2.직원용
        - 초기 화면(야식대 등록, 지출 내역 확인)
        - 야식대 list 섹션
        - 결제 요청 섹션
        - 업주 확인용 섹션

    3. 업주용
        - 해당 음식점 매출 현황 섹션
            : 하단 네비게이션 탭(list, graph)

    4. 총무용
        - 초기 화면(결제 정보, 야식대 FDS)
        - 결제 정보 섹션
            : 하단 네비게이션 탭(list, graph)
        - 야식대 FDS
            : 그래프
            : 이상 징후 지점 클릭 후 -> 이상 징후 탐지 list
*/

const Stack = createStackNavigator();

// 홈
const StackNavigator_Home = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Home}
      screenOptions={{
        title: '홈',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerBackTitle: 'Back',
        headerRight: () => (
          <MaterialIcons.Button
            name="person-outline"
            color="black"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen name={routes.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

// 직원용 flow
const StackNavigator_Emp = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Emp}
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerBackTitle: 'Back',
        headerTitleAlign:'center',
        headerRight: () => (
          <MaterialIcons.Button
            name="person-outline"
            color="black"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen
        name={routes.Emp}
        component={EmpScreen}
        options={{title: '직원'}}
      />
      <Stack.Screen
        name={routes.Ret_List}
        component={Ret_ListScreen}
        options={{title: '야식대 리스트'}}
      />
      <Stack.Screen
        name={routes.Req_Pay}
        component={Req_PayScreen}
        options={{title: '결제 요청'}}
      />
      <Stack.Screen
        name={routes.Confirm_ReqPay}
        component={Confirm_ReqPayScreen}
        options={{title: '결제 확인'}}
      />

      {/* 지출 내역 route */}
    </Stack.Navigator>
  );
};

// 업주용 flow
const StackNavigator_RetManager = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Ret_Profit}
      screenOptions={{
        title: '음식점 매출 현황',
        headerStyle: {
          backgroundColor: '#9AC4F8',
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back',
        headerRight: () => (
          <MaterialIcons.Button
            name="person-outline"
            color="white"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen name={routes.Ret_Profit} component={Ret_ProfitScreen} />
    </Stack.Navigator>
  );
};

// 총무부 flow
const StackNavigator_Emp_PayDept = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={routes.Emp_PayDept}
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerBackTitle: 'Back',
        headerRight: () => (
          <MaterialIcons.Button
            name="person-outline"
            color="black"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen
        name={routes.Emp_PayDept}
        component={Emp_PayScreen}
        options={{title: '총무부'}}
      />

      {/* 결제정보, 야식대 FDS route */}
    </Stack.Navigator>
  );
};

export {
  StackNavigator_Home,
  StackNavigator_Emp,
  StackNavigator_RetManager,
  StackNavigator_Emp_PayDept,
};
