import React from 'react'

//stack navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

//context
import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../hooks/useAuth'


//Stack
import AuthStack from './stack/AuthRouter'
import HomeStack from './stack/MainRouter'


const MainRouter = createStackNavigator();


export function RouterNavigation() {

    const { state, auth } = useAuth();


    function RenderNavigation(){
        return state.user === undefined ? (
            <MainRouter.Screen name={"AutnStack"} component={AuthStack} />
        ) : (
            <MainRouter.Screen name={"HomeStack"} component={HomeStack} />
        )
    }

    return (
        <AuthContext.Provider value={auth} >
            <NavigationContainer>
                <MainRouter.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                    {RenderNavigation()}
                </MainRouter.Navigator>
             </NavigationContainer>
        </AuthContext.Provider>
    )
}
