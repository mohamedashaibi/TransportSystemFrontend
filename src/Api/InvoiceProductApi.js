import axios from '../Axios';

const url = "/InvoiceProducts";

export const GetInvoiceProducts = () => axios.get(url);
export const GetInvoiceProduct = (id) => axios.get(`${url}/${id}`);
export const CreateInvoiceProduct = (newInvoiceProduct) => axios.post(url, newInvoiceProduct);