import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {
  StackNavigator_Home,
  StackNavigator_Emp,
  StackNavigator_RetManager,
  StackNavigator_Emp_PayDept,
} from './StackNavigator';
import routes from '../../routes';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="직원" component={StackNavigator_Emp} />
      <Drawer.Screen name="총무부" component={StackNavigator_Emp_PayDept} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
