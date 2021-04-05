import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

const AutheStack = createStackNavigator();

//page
import SignInScreen from '../../page/Auth/SignIn'

export default function AuthRouter() {
    return (
        <AutheStack.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <AutheStack.Screen name="SignInScreen" component={SignInScreen} />
        </AutheStack.Navigator>
    )
}
