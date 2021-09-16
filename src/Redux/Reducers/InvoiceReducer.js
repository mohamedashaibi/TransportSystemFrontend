import { CREATE_INVOICE,DELETE_INVOICE,ERROR_INVOICE,GET_INVOICE,GET_INVOICES,UPDATE_INVOICE } from "../Actions/Invoice/action-types"

const initialState = {
    invoices: {},
    invoice: {},
    error:{}
}

export const InvoiceReducer = (state=initialState, action) => {

    const{type, payload} = action

    switch(type){
        case GET_INVOICES:
            return({...state, invoices: {...payload}})
        case GET_INVOICE:
            return({...state, invoice: {...payload}})
        case CREATE_INVOICE:
            return({...state, invoices: {...payload}})
        case UPDATE_INVOICE:
            return({...state });
        case DELETE_INVOICE:
            return({...state});   
            case ERROR_INVOICE:
                return({...state, error: {...payload}})
        default:
        return state

    }
}