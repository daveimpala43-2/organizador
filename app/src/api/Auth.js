import { BASE_PATH } from "./config";
import axios from 'axios';


export function signInUser(userData){
    let {email, password} = userData;
    return axios.post(`${BASE_PATH}/signin`,{
        email,
        password
    }).then(result=>{
        return result
    }).catch(err=>{
        return err
    })
}