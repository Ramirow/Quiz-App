import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        style={{color: 'red', marginButtom: 10, padding: 10}}
        title="Level 1"
        onPress={() => navigation.navigate('level1')}
      />
      <Button
        title="Level 2"
        onPress={() => navigation.navigate('level2')}
      />
      <Button
        title="Level 3"
        onPress={() => navigation.navigate('level3')}
      />

    </View>
  );
}
export default HomeScreen