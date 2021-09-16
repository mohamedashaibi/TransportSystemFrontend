import { CREATE_CITY, GET_CITIES, GET_CITY, UPDATE_CITY,ERROR_CITY } from "../Actions/City/action-types"

const initialState = {
    cities: [],
    city: {},
    error:{}
}

export const CityReducer = (state=initialState, action) => {

    const{type, payload} = action

    switch(type){
        case GET_CITIES:
            return({...state, cities: [...payload]})
        case GET_CITY:
            return({...state, city:{...payload}})
        case CREATE_CITY:
            return({...state, cities: {...payload}})
        case UPDATE_CITY:
            return({...state });    
            case ERROR_CITY:
                return({...state, error: {...payload}})
        default:
        return state

    }
}