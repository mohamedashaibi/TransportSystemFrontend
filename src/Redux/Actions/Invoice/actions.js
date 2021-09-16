import { CREATE_INVOICE, DELETE_INVOICE,GET_INVOICE,GET_INVOICES,UPDATE_INVOICE,ERROR_INVOICE } from "./action-types";
import * as api from "../../../Api/InvoiceApi";

export const CreateInvoice = (newInvoice) => async(dispatch) => { 
    try{
        const {data} = await api.CreateInvoice(newInvoice);

        dispatch({type: CREATE_INVOICE, payload: {...data}});
    }catch(error){
        dispatch({type:ERROR_INVOICE, payload:{error}})
    }
}

export const DeleteInvoice = (id) => async(dispatch) => {
    try{
        const {data} = await api.DeleteInvoice(id);

        dispatch({type: DELETE_INVOICE, payload: {...data}});
    }catch(error){
        dispatch({type:ERROR_INVOICE, payload:{error}})
    }
}

export const GetInvoices = () => async(dispatch) => {
    try{
        const{data} = await api.GetInvoices();

        dispatch({type: GET_INVOICES, payload: {...data}});
    }catch(error){
        dispatch({type:ERROR_INVOICE, payload:{error}})
    }
}

export const GetInvoice = (id) => async(dispatch) => {
    try{
        const{data} = await api.GetInvoice(id);

        dispatch({type: GET_INVOICE, payload: {...data}});
    }catch(error){
        dispatch({type:ERROR_INVOICE, payload:{error}})
    }
}

export const UpdateInvoice = (id, updateInvoice) => async(dispatch) => {
    try{
        const{data} = await api.UpdateInvoice(id, updateInvoice);

        dispatch({type:UPDATE_INVOICE, payload: {...data}});
    }catch(error){
        dispatch({type:ERROR_INVOICE, payload:{error}})
    }
}
