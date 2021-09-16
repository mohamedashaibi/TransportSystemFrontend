import axios from '../Axios';

const url = "/CompanyProducts";

export const GetCompanyProducts = () => axios.get(url);
export const GetCompanyProduct = (id) => axios.get(`${url}/${id}`);
export const CreateCompanyProduct = (newCompanyProduct) => axios.post(url, newCompanyProduct);
export const UpdateCompanyProduct = (id, updateCompanyProduct) => axios.put(`${url}/${id}`, updateCompanyProduct);