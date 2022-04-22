import React from "react";
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from "./HomeNavigator";
import { Header } from "react-native/Libraries/NewAppScreen";
import { HOME_NAVIGATOR, HOME_NAVOGATOR } from "../constants/routeNames";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} options={{headerShown:false}}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;