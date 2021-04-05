import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export function Button({buttonStyle, onPress, textStyle, text}) {
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress} >
            <Text style={textStyle} >{text}</Text>
        </TouchableOpacity>
    )
}
