import React, { Children } from 'react'
import { View, Text, TextInput } from 'react-native'

export function Input({...props}) {
    return (
        <TextInput {...props}  /> 
    )
}
