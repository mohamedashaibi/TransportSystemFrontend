import axios from '../Axios';


const url = "/Account";

export const Login = (username, password) => axios.post(url + "/login", {"email": username, "password": password});

export const Register = ({email, password, firstName, lastName, phoneNumber}) => axios.post(url + "/register", {
    "email": email,
    "password": password,
    "firstName": firstName,
    "lastName": lastName,
    "phoneNumber": phoneNumber
  });