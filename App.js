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
import Quiz1 from './screens/Quiz1';  
import Quiz2 from './screens/Quiz2'; 
import Quiz3 from './screens/Quiz3'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/>
        <Stack.Screen name="level1" component={Quiz1} options={{ title: 'Quiz level 1' }}/>
        <Stack.Screen name="level2" component={Quiz2} options={{ title: 'Quiz level 2' }}/>
        <Stack.Screen name="level3" component={Quiz3} options={{ title: 'Quiz level 3' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;