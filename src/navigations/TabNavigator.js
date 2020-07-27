import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import Analyze_ListScreen from '../screens/Emp/Analyze_ListScreen';
import Analyze_GraphScreen from '../screens/Emp/Analyze_GraphScreen';
import Ret_Anl_ListScreen from '../screens/Ret_Manager/Ret_Anl_ListScreen';
import Ret_Anl_GraphScreen from '../screens/Ret_Manager/Ret_Anl_GraphScreen';
import MAnalyze_GraphScreen from '../screens/Emp_PayDept/MAnalyze_GraphScreen';
import MAnalyze_ListScreen from '../screens/Emp_PayDept/MAnalyze_ListScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import routes from '../../routes';

const Tab = createBottomTabNavigator();
function Tab_Emp_Anl() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.Analyze_List}
        component={Analyze_ListScreen}
        // option={{
        //   tabBarIcon: ({focused}) => {
        //     return (
        //       <MaterialIcons.Button
        //         name="dehaze"
        //         color="black"
        //         size={25}
        //         backgroundColor="transparent"
        //       />
        //     );
        //   },
        // }}
      />
      <Tab.Screen name={routes.Analyze_Graph} component={Analyze_GraphScreen} />
    </Tab.Navigator>
  );
}

function Tab_Mgr_Anl() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.MAnalyze_Graph}
        component={MAnalyze_GraphScreen}
      />
      <Tab.Screen name={routes.MAnalyze_List} component={MAnalyze_ListScreen} />
    </Tab.Navigator>
  );
}
export {Tab_Emp_Anl, Tab_Mgr_Anl};
