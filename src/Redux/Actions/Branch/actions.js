import { CREATE_BRANCH, DELETE_BRANCH, ENABLE_BRANCH, GET_BRANCH, GET_BRANCHES, UPDATE_BRANCH,ERROR_BRANCH } from "./action-types";
import * as api from "../../../Api/BranchApi";

export const CreateBranch = (newBranch) => async(dispatch) => { 
    try{
        const {data} = await api.CreateBranch(newBranch);

        dispatch({type: CREATE_BRANCH, payload: {...data}});
    }catch(error){
        dispatch({type: ERROR_BRANCH, payload: {error}})
    }
}

export const DeleteBranch = (id) => async(dispatch) => {
    try{
        const {data} = await api.DeleteBranch(id);

        dispatch({type: DELETE_BRANCH, payload: {...data}});
    }catch(error){
        dispatch({type: ERROR_BRANCH, payload: {error}})
    }
}

export const GetBranches = () => async(dispatch) => {
    try{
        const{data} = await api.GetBranches();

        dispatch({type: GET_BRANCHES, payload: [...data]});
    }catch(error){
        dispatch({type: ERROR_BRANCH, payload: {error}})
        
    }
}

export const GetBranch = (id) => async(dispatch) => {
    try{
        const{data} = await api.GetBranch(id);

        dispatch({type: GET_BRANCH, payload: {...data}});
    }catch(error){
        dispatch({type: ERROR_BRANCH, payload: {error}})
    }
}

export const UpdateBranch = (id, updateBranch) => async(dispatch) => {
    try{
        const{data} = await api.UpdateBranch(id, updateBranch);

        dispatch({type:UPDATE_BRANCH, payload: {...data}});
    }catch(error){
        dispatch({type: ERROR_BRANCH, payload: {error}})
    }
}

export const EnableBranch = (id) => async(dispatch) => {
    try{
        const {data} = await api.EnableBranch(id);

        dispatch({type: ENABLE_BRANCH, payload:{...data}})
    }catch(error){
        dispatch({type: ERROR_BRANCH, payload: {error}})
    }
}