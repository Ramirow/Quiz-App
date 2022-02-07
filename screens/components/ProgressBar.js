import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import { COLORS, SIZES } from '../../constants';
export default RenderProgressBar = ({progress,allQuestions}) => {
    return (
        <View style={{
            width: '100%',
            height: 20,
            borderRadius: 20,
            backgroundColor: '#00000020',

        }}>
            <Animated.View style={[{
                height: 20,
                borderRadius: 20,
                backgroundColor: COLORS.accent
            },{
                width: progress.interpolate({
                    inputRange: [0, allQuestions.length],
                    outputRange: ['0%','100%']
                })
            }]}>

            </Animated.View>

        </View>
    )
}
