import { CREATE_BRANCH, DELETE_BRANCH,ENABLE_BRANCH,GET_BRANCH,GET_BRANCHES,UPDATE_BRANCH,ERROR_BRANCH } from "../Actions/Branch/action-types"

const initialState = {
    branches: [],
    branch: {},
    error:{}
}

export const BranchReducer = (state=initialState, action) => {

    const{type, payload} = action

    switch(type){
        case GET_BRANCHES:
            return({...state, branches: [...payload]})
        case GET_BRANCH:
            return({...state, branch:{...payload}})
        case CREATE_BRANCH:
            return({...state, branches: [...payload]})
        case UPDATE_BRANCH:
            return({...state });
        case DELETE_BRANCH:
            return({...state});
        case ENABLE_BRANCH:
            return({...state});    
            case ERROR_BRANCH:
                return({...state, error: {...payload}})    
        default:
        return state

    }
}