import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import Analyze_ListScreen from '../screens/Emp/Analyze_ListScreen';
import Analyze_GraphScreen from '../screens/Emp/Analyze_GraphScreen';

import MAnalyze_GraphScreen from '../screens/Emp_PayDept/MAnalyze_GraphScreen';
import MAnalyze_ListScreen from '../screens/Emp_PayDept/MAnalyze_ListScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import routes from '../../routes';

const Tab = createBottomTabNavigator();
function Tab_Emp_Anl() {
  return (
    <Tab.Navigator
      initialRouteName="List"
      activeColor="#e91e63"
      style={{backgroundColor: 'red'}}>
      <Tab.Screen
        name="List"
        component={Analyze_ListScreen}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: () => (
            <MaterialIcons name="list" color="#333" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Graph"
        component={Analyze_GraphScreen}
        options={{
          tabBarLabel: 'Graph',
          tabBarIcon: () => (
            <MaterialIcons name="timeline" color="#333" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Tab_Mgr_Anl() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.MAnalyze_Graph}
        component={MAnalyze_GraphScreen}
        options={{
          tabBarLabel: 'Graph',
          tabBarIcon: () => (
            <MaterialIcons name="timeline" color="#333" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.MAnalyze_List}
        component={MAnalyze_ListScreen}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: () => (
            <MaterialIcons name="list" color="#333" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export {Tab_Emp_Anl, Tab_Mgr_Anl};
