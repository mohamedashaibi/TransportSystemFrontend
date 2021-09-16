import axios from '../Axios';


const url = "/Branches";

export const GetBranches = () => axios.get(url);
export const GetBranch = (id) => axios.get(`${url}/${id}`);
export const CreateBranch = (newBranch) => axios.post(url, newBranch);
export const UpdateBranch = (id, updateBranch) => axios.put(`${url}/${id}`, updateBranch);
export const DeleteBranch = (id) => axios.delete(`${url}/${id}`);
export const EnableBranch = (id) => axios.patch(`${url}/${id}`);
