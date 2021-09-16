import { CREATE_COMPANY, DELETE_COMPANY,ENABLE_COMPANY,GET_COMPANIES,GET_COMPANY,UPDATE_COMPANY,ERROR_COMPANY} from "./action-types";
import * as api from "../../../Api/CompanyApi";

export const CreateCompany = (newCompany) => async(dispatch) => { 
    try{
        const {data} = await api.CreateCompany(newCompany);

        dispatch({type: CREATE_COMPANY, payload: {...data}});
    }catch(error){
        dispatch({type:ERROR_COMPANY, payload: {error}})
    }
}

export const DeleteCompany = (id) => async(dispatch) => {
    try{
        const {data} = await api.DeleteCompany(id);

        dispatch({type: DELETE_COMPANY, payload: {...data}});
    }catch(error){
        dispatch({type:ERROR_COMPANY, payload: {error}})
    }
}

export const GetCompanyes = () => async(dispatch) => {
    try{
        const{data} = await api.GetCompanies();

        dispatch({type: GET_COMPANIES, payload: {...data}});
    }catch(error){
        dispatch({type:ERROR_COMPANY, payload: {error}})
    }
}

export const GetCompany = (id) => async(dispatch) => {
    try{
        const{data} = await api.GetCompany(id);

        dispatch({type: GET_COMPANY, payload: {...data}});
    }catch(error){
        dispatch({type:ERROR_COMPANY, payload: {error}})
    }
}

export const UpdateCompany = (id, updateCompany) => async(dispatch) => {
    try{
        const{data} = await api.UpdateCompany(id, updateCompany);

        dispatch({type:UPDATE_COMPANY, payload: {...data}});
    }catch(error){
        dispatch({type:ERROR_COMPANY, payload: {error}})
    }
}

export const EnableCompany = (id) => async(dispatch) => {
    try{
        const {data} = await api.EnableCompany(id);

        dispatch({type: ENABLE_COMPANY, payload: {...data}})
    }catch(error){
        dispatch({type:ERROR_COMPANY, payload: {error}})
    }
}