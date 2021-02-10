import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackNav from './StackNav';
import MenuContent from '../components/MenuContent';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return(
    <Drawer.Navigator
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <Drawer.Screen  name="Home" component={StackNav} />
      <Drawer.Screen name="Detail" component={StackNav} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;