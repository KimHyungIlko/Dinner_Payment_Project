import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import Analyze_ListScreen from '../screens/Emp/Analyze_ListScreen';
import Analyze_GraphScreen from '../screens/Emp/Analyze_GraphScreen';
import Ret_Anl_ListScreen from '../screens/Ret_Manager/Ret_Anl_ListScreen';
import Ret_Anl_GraphScreen from '../screens/Ret_Manager/Ret_Anl_GraphScreen';
import routes from '../../routes';

const Tab = createBottomTabNavigator();
function Tab_Emp_Anl() {
  return (
      <Tab.Navigator>
        <Tab.Screen name={routes.Analyze_Graph} component={Analyze_GraphScreen} />
        <Tab.Screen name={routes.Analyze_List} component={Analyze_ListScreen} />
      </Tab.Navigator>
  );
}

function Tab_Ret_Anl() {
  return (
      <Tab.Navigator>
        <Tab.Screen name={routes.Ret_Anl_Graph} component={Ret_Anl_GraphScreen} />
        <Tab.Screen name={routes.Ret_Anl_List} component={Ret_Anl_ListScreen} />
      </Tab.Navigator>
  );
}
export {Tab_Emp_Anl, Tab_Ret_Anl} ;