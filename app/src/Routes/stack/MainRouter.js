import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AutheStack = createStackNavigator();
const DrawerStack = createDrawerNavigator();

//page
import HomeScreen from '../../page/Home'

export default function AuthRouter() {
    return (
        <DrawerStack.Navigator>
            <DrawerStack.Screen name="HomeScreen" component={HomeScreen} />
        </DrawerStack.Navigator>
    )
}


