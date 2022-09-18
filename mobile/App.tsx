import { StatusBar} from 'react-native';
import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter';
import { Background } from './src/components/Background';


import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';


import './src/services/notificationConfigs';
import {getPushNotificationToken} from './src/services/getPushNotificationToken';
import { useRef } from 'react';

import { Subscription } from 'expo-modules-core'
import { useFocusEffect } from '@react-navigation/native';



export default function App() {
  const [fontsLoaded] =  useFonts({Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black});


  const getNotificationListener = useRef<Subscription>()
  const responseNotificationListener = useRef<Subscription>()

  useFocusEffect(() => {
    getPushNotificationToken();
  })

  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
