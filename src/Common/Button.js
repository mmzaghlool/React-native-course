import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native'



export const Button = ({ onPress, text, style }) => (
    <TouchableOpacity
        onPress={onPress}
        style={[{
            width: "80%", backgroundColor: 'green', borderRadius: 30, alignItems: 'center'
            , padding: 10, alignSelf: 'center', margin: 20, elevation: 5
        }, style]}
    >
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }} >{text}</Text>
    </TouchableOpacity>
)
