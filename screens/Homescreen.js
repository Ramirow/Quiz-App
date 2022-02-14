import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text } from 'react-native';
import Quiz1 from './Quiz1';
 

const HomeScreen = ({route,navigation}) => {
  // const [isButtonDisabled, setButtonDisabled] = useState(true);
  const {score1} = route.params
  const {score2} = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style = {{marginBottom:30}}>
      <Button
        title="Level 1"
        onPress={() => navigation.navigate('level1')}
      />
      </View>
      <View style = {{marginBottom:30}}>
      <Button
        disabled={score1 > 3 || score2 > 3?false:true}
        title="Level 2"
        onPress={() => navigation.navigate('level2')}
      />
      </View>
      <View style = {{marginBottom:30}}>
      <Button
        disabled={score2 > 3?false:true}
        title="Level 3"
        onPress={() => navigation.navigate('level3')}
      />
      </View>
    </View>
  );
}
export default HomeScreen