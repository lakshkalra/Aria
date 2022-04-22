import React from "react";
import { createStackNavigator} from "@react-navigation/stack";
import { View,Text } from "react-native";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import { LOGIN, REGISTER } from "../constants/routeNames";





const AuthNavigator = () =>{
    const AuthStack = createStackNavigator();
    return(
        <AuthStack.Navigator>
            {/* <AuthStack.Screen name={LOGIN} component={Login} options={{headerShown:false}} ></AuthStack.Screen> */}
            <AuthStack.Screen name={REGISTER} component={Register} options={{headerShown:false}}></AuthStack.Screen>
        </AuthStack.Navigator>
        )
}


export default AuthNavigator;