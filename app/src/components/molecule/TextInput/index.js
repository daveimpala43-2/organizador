import React from 'react'
import { View, Text } from 'react-native';
import { Input } from '../../atom/input';

export function LabelInput({label,labelStyle,...props}) {
    return (
        <View>
            <Text style={labelStyle} >{label}</Text>
            <Input {...props} />
        </View>
    )
}
