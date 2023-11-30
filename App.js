import React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './Routes/index.js';


export default function App() {
  return (
   <NavigationContainer>
      <StatusBar backgroundColor='#38A66D' barStyle='light-content'/>
      <Routes/>
   </NavigationContainer>
   
   
   
   
   
   );
}

