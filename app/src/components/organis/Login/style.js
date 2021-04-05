import React from 'react'
import { StyleSheet } from 'react-native';

//colores
import { colors } from '../../../styles/helpers/color'

//fonts
import { fonts } from '../../../styles/helpers/fonts';

export const authStyle = StyleSheet.create({
    form:{
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        backgroundColor: colors.white,
        borderRadius: 5,
        padding: 8,
        borderWidth: 1,
        borderColor: colors.black,
        fontFamily: fonts.Regular
    },
    label:{
        paddingBottom: 8,
        fontFamily: fonts.SemiBold
    },  
    containerInput:{
        width:'90%',
        padding:12,
    },
    containerButton:{
        width:'90%',
        padding:12,
    },
    button:{
        padding:8,
        backgroundColor: colors.primary60,
        borderRadius:5,
        borderColor:colors.primary80,
        borderWidth: 1
    },
    labelButton:{
        textAlign:'center',
        fontFamily: fonts.SemiBold
    },
    errButton:{
        borderColor:colors.red60
    },
    errText:{
        color: colors.red60
    }
})
