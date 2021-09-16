import axios from '../Axios';


const url = "/Invoices";

export const GetInvoices = () => axios.get(url);
export const GetInvoice = (id) => axios.get(`${url}/${id}`);
export const CreateInvoice = (newInvoice) => axios.post(url, newInvoice);
export const UpdateInvoice = (id, updateInvoice) => axios.put(`${url}/${id}`, updateInvoice);
export const DeleteInvoice = (id) => axios.delete(`${url}/${id}`);