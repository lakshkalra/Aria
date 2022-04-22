import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native"

import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import DrawerNavigator from "./DrawerNavigator";

const AppNavContanier = () =>{
    const isLoggedIn = false;
    return(
        <NavigationContainer>
            {isLoggedIn? <DrawerNavigator/>: <AuthNavigator/>}
            
        </NavigationContainer>
    )
}


export default AppNavContanier;