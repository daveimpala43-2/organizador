import React from 'react';
import { createAction } from '../utils/createAction';
import AsyncStorage from '@react-native-community/async-storage';

export function useAuth() {
    const [state, dispatch] = React.useReducer((state, action)=>{
        switch(action.type){
            case 'SET_USER':
                return{
                    ...state,
                    loading: false,
                    user: {...action.payload},
                };
            case 'REMOVE_USER':
                return {
                    ...state,
                    user: undefined
                };
            case 'SET_LOADING':
                return{
                    ...state,
                    loading: action.payload
                }
            default:
                return state;
        }
    },
    {
        user: undefined,
        loading: true
    }
    )

    const auth = React.useMemo(
        ()=>({
        login: async (accToken, refresh)=>{
            const user ={
                accessToken: accToken,
                refreshToken: refresh
            };
            await AsyncStorage.setItem('user', JSON.stringify(user));
            dispatch(createAction('SET_USER', user ));
        },
        logout: async ()=>{
            await AsyncStorage.removeItem('user');
            await AsyncStorage.clear();
            dispatch(createAction('REMOVE_USER', undefined));
        }
    })
    );

    React.useEffect(()=>{
        setTimeout(async ()=>{
            try{
                await AsyncStorage.getItem('user').then((result)=>{
                    if(result){
                        dispatch(createAction('SET_USER', JSON.parse(result) ))
                    }else{
                        dispatch(createAction('SET_LOADING', false));
                    }
                })
            }catch(e){
                console.log(e)
            }
        },500);
        
    },[]);
    return { auth, state }
}