/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import HomeScreen from './screens/Homescreen'
import Quiz from './screens/Quiz';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="Quiz" component={Quiz} options={{ title: 'Quiz' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;