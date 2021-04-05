import React from 'react';
import {RouterNavigation} from './src/Routes'
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font'
import {Splash} from './src/page/Splash'

export default function App() {

  const [loaded, error] = useFonts({ 
    'Lexend-Light': require('./assets/fonts/Lexend/Lexend-Light.ttf'),
    'Lexend-Regular': require('./assets/fonts/Lexend/Lexend-Regular.ttf'),
    'Lexend-SemiBold': require('./assets/fonts/Lexend/Lexend-SemiBold.ttf'),
    'Lexend-Medium': require('./assets/fonts/Lexend/Lexend-Medium.ttf'),
   });

   if(!loaded){
    return <Splash />
   }

  return (
      <RouterNavigation />
  );
}
