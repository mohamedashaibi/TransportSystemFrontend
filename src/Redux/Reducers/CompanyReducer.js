import { CREATE_COMPANY,DELETE_COMPANY,ENABLE_COMPANY,GET_COMPANIES,GET_COMPANY,UPDATE_COMPANY,ERROR_COMPANY } from "../Actions/Company/action-types"

const initialState = {
    companies: {},
    company: {},
    error:{}
}

export const CompanyReducer = (state=initialState, action) => {

    const{type, payload} = action

    switch(type){
        case GET_COMPANIES:
            return({...state, companies: {...payload}})
        case GET_COMPANY:
            return({...state, company: {...payload}})
        case CREATE_COMPANY:
            return({...state, companies: {...payload}})
        case UPDATE_COMPANY:
            return({...state });
        case DELETE_COMPANY:
            return({...state});
        case ENABLE_COMPANY:
            return({...state});    
            case ERROR_COMPANY:
                return({...state, error: {...payload}})
        default:
        return state

    }
}