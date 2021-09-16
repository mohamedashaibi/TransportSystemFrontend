import {CREATE_CITY, GET_CITIES,GET_CITY, UPDATE_CITY, ERROR_CITY} from "./action-types"

import * as api from "../../../Api/CityApi";

export const CreateCity = (newCity) => async(dispatch) => { 
    try{
        const {data} = await api.CreateCity(newCity);

        dispatch({type: CREATE_CITY, payload: {...data}});
    }catch(error){
        dispatch({type:ERROR_CITY, payload: {error}})
    }
}

export const GetCities = () => async(dispatch) => {
    try{
        const{data} = await api.GetCities();

        console.log("cities in actions :" + data);

        dispatch({type: GET_CITIES, payload: [...data]});
    }catch(error){
        dispatch({type:ERROR_CITY, payload: {error}})
    }
}

export const GetCity = (id) => async(dispatch) => {
    try{
        const{data} = await api.GetCity(id);

        dispatch({type: GET_CITY, payload: {...data}});
    }catch(error){
        dispatch({type:ERROR_CITY, payload: {error}})
    }
}

export const UpdateCity = (id, updateCity) => async(dispatch) => {
    try{
        const{data} = await api.UpdateCity(id, updateCity);

        dispatch({type:UPDATE_CITY, payload: {...data}});
    }catch(error){
        dispatch({type:ERROR_CITY, payload: {error}})
    }
}