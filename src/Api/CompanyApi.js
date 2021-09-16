import axios from '../Axios';


const url = "/Companies";

export const GetCompanies = () => axios.get(url);
export const GetCompany = (id) => axios.get(`${url}/${id}`);
export const CreateCompany = (newCompany) => axios.post(url, newCompany);
export const UpdateCompany = (id, updateCompany) => axios.put(`${url}/${id}`, updateCompany);
export const DeleteCompany = (id) => axios.delete(`${url}/${id}`);
export const EnableCompany = (id) => axios.patch(`${url}/${id}`);