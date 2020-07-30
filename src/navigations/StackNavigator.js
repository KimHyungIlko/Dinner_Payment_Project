import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';

import {FdsScreen, FDSList} from '../screens/Emp_PayDept/FdsScreen';
import Emp_PayDeptScreen from '../screens/Emp_PayDept/Emp_PayDeptScreen';
import Dept_FdsScreen from '../screens/Emp_PayDept/Dept_FdsScreen';
import Emp_FdsScreen from '../screens/Emp_PayDept/Emp_FdsScreen';
import Info_PayScreen from '../screens/Emp_PayDept/Info_PayScreen';

import routes from '../../routes';

import EmpScreen from '../screens/Emp/EmpScreen';
import Ret_ListScreen from '../screens/Emp/Ret_ListScreen';
import Req_PayScreen from '../screens/Emp/Req_PayScreen';
import Confirm_ReqPayScreen from '../screens/Emp/Confirm_ReqPayScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Tab_Emp_Anl, Tab_Mgr_Anl} from './TabNavigator';
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
            name="dehaze"
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
        headerTitleAlign: 'center',
        headerRight: () => (
          <MaterialIcons.Button
            name="dehaze"
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
        options={{title: '식당 리스트'}}
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
      <Stack.Screen
        name={routes.Analyze_Home}
        component={Tab_Emp_Anl}
        options={{title: '금액 사용 현황'}}
      />
      {/* 지출 내역 route */}
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
            name="dehaze"
            color="black"
            size={25}
            backgroundColor="transparent"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}>
      <Stack.Screen
        name={routes.Emp_PayDept}
        component={Emp_PayDeptScreen}
        options={{title: '총무부'}}
      />
      <Stack.Screen
        name={routes.Info_Pay}
        component={Tab_Mgr_Anl}
        options={{title: '총무부'}}
      />
      <Stack.Screen
        name={routes.Fds}
        component={FdsScreen}
        options={{title: '총무부'}}
      />
      <Stack.Screen
        name={routes.Dept_Fds}
        component={Dept_FdsScreen}
        options={{title: '총무부'}}
      />
      <Stack.Screen
        name={routes.Emp_Fds}
        component={Emp_FdsScreen}
        options={{title: '총무부'}}
      />
      <Stack.Screen
        name={'FDSList'}
        component={FDSList}
        options={{title: '총무부'}}
      />
      {/* 결제정보, 야식대 FDS route */}
    </Stack.Navigator>
  );
};

export {StackNavigator_Home, StackNavigator_Emp, StackNavigator_Emp_PayDept};
