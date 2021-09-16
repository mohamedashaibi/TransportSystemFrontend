import { LOGOUT, LOGIN, AUTHERROR } from "../Actions/Auth/action-types"

const initialState = {
    auth: {
        token: "",
        user: {}
    },
    error:{}
}

export const AuthReducer = (state=initialState, action) => {

    const{type, payload} = action

    switch(type){
        case LOGIN:
            return({...state, auth: {...payload}})
        case LOGOUT:
            return({...state, auth:{token:"", user:{}}})
        case AUTHERROR:
            return({...state, error: {...payload}})
        default:
        return state

    }
}