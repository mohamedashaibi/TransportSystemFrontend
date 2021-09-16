import axios from '../Axios';

const url = "/Cities";

export const GetCities = () => axios.get(url);
export const GetCity = (id) => axios.get(`${url}/${id}`);
export const CreateCity = (newCity) => axios.post(url, newCity);
export const UpdateCity = (id, updateCity) => axios.put(`${url}/${id}`, updateCity);