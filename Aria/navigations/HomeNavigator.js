import React from "react";
import { createStackNavigator} from "@react-navigation/stack";
import { View,Text } from "react-native";
import { CONTACT_DETAILS, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from "../constants/routeNames";
import Contacts from "../Screens/Contact";
import ContactDetails from "../Screens/ContactDetails";
import CreateContact from "../Screens/CreateContact";
import Settings from "../Screens/Settings";



const HomeNavigator = () =>{
    const HomeStack = createStackNavigator();
    return(
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
        )
}


export default HomeNavigator;