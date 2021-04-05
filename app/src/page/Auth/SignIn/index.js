import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';

//componentes
import Login from '../../../components/organis/Login';

//color
import { colors } from '../../../styles/helpers/color'

export default function index() {
    return (
        <View style={style.container}>
            <StatusBar backgroundColor={colors.primary40} />
            <Login />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        marginTop:24
    }
})