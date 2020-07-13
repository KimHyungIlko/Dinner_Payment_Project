import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import Analyze_ListScreen from '../screens/Emp/Analyze_ListScreen';
import Analyze_GraphScreen from '../screens/Emp/Analyze_GraphScreen';
import routes from '../../routes';

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen name={routes.Analyze_Graph} component={Analyze_GraphScreen} />
        <Tab.Screen name={routes.Analyze_List} component={Analyze_ListScreen} />
      </Tab.Navigator>
  );
}
export default TabNavigator;