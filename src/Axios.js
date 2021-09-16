import axios from 'axios'

const instance = axios.create({
    baseURL: "https://localhost:44345/api",
    headers:{
        "Authorization": "Bearer " + localStorage.getItem("JWT")
    }
})

//We use state to get the token and send it with every request which then is used to authentication

export default instance