import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../src/pages/Home.js';
import Feed from '../src/pages/Feed.js';
import Rota from '../src/pages/Rota.js'


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
      <Stack.Screen name="Feed" component={Feed}  options={{ headerShown: false }}/>
      <Stack.Screen name="Rota" component={Rota}  options={{ headerShown: false }}/>

    </Stack.Navigator>
  );
}

