import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'

//componetes
import { LabelInput } from '../../molecule/TextInput'
import { Button } from '../../atom/button';

//estilos
import { authStyle } from './style'

//utils
import { emailValidation } from '../../../utils/EmailValidation'

//api
import { signInUser } from '../../../api/Auth'

//context
import { AuthContext } from '../../../context/AuthContext'

export default function index() {

    const { login } = React.useContext(AuthContext);

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [emailErr, setEmailErr] = useState('');
    const [pwdErr, setPwdErr] = useState('');

    const handleUserData = (name,value) =>{
        setUserData({...userData, [name]:value})
    }

    const handleSignIn = (e) =>{
        e.preventDefault();
        if(!userData.email) { 
            setEmailErr('Debes de ingresar tu correo electronico')
        }else{
            const emailValid = emailValidation(userData.email)
            if(!emailValid){
                setEmailErr('Debes de ingresar un correo electronico valido')
            }else{
                setEmailErr('')
            }
        }

        if(!userData.password){
            setPwdErr('Debes de ingresar tu contraseña')
        }else{
            setPwdErr('')
        }

        if(userData.email && userData.password){
            signInUser(userData).then(response =>{
                if(response.status === 200){
                    console.log("yei")
                    login(response.data)
                }else if(response.status === 404){
                    setAccountError('No pudimos encontrar una cuenta asociada con ese correo y/o contraseña');
                }
                
            })
        }
    }

    return (
        <View style={authStyle.form}>
                <View style={authStyle.containerInput} >
                    <LabelInput 
                    label="Correo electronico"
                    labelStyle={authStyle.label}
                    style={[authStyle.input, emailErr ? authStyle.errButton : null ]}
                    placeholder="Tu correo electronico"
                    keyboardType="email-address" 
                    autoCapitalize='none'
                    onChangeText={(value)=>{handleUserData('email',value)}}
                    />
                    { emailErr ? <Text style={authStyle.errText} >{emailErr}</Text> : null}
                    
                </View>
                <View style={authStyle.containerInput} >
                    <LabelInput 
                    label="Contraseña"
                    labelStyle={authStyle.label}
                    style={[authStyle.input, pwdErr ? authStyle.errButton : null ]}
                    placeholder="Tu contraseña"
                    secureTextEntry={true}
                    autoCapitalize='none'
                    onChangeText={(value)=>{handleUserData('password',value)}}
                    />
                    { pwdErr ? <Text style={authStyle.errText} >{pwdErr}</Text> : null}
                </View>
                <View style={authStyle.containerButton} >
                    <Button buttonStyle={authStyle.button} textStyle={authStyle.labelButton} text="Inrgesar" onPress={handleSignIn} />
                </View>
        </View>
    )
}

