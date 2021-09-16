import { LOGIN, LOGOUT, AUTHERROR, CLEAR_ERRORS } from './action-types'
import * as api from '../../../Api/AuthApi'

export const Login = (email, password) => async(dispatch) => {
    try{
        const{data} = await api.Login(email, password)
        localStorage.setItem("JWT", data.token);
        dispatch({type: LOGIN, payload: { ...data }})
    }
    catch(error){
        dispatch({type: AUTHERROR, payload: {error}})
    }
}

export const CreateUser = (newUser) => async(dispatch) => {
    try{
        const {data} = await api.Register(newUser)

        dispatch({type: LOGIN, payload: data})
    }catch(error){
        dispatch({type: AUTHERROR, payload: {error}})
        
    }
}

export const Logout = () => async(dispatch) => {
    dispatch({type: LOGOUT})
}