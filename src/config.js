import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "https://craft123.herokuapp.com/"
})

export default AxiosInstance;
