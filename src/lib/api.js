import axios from "axios";

const BASE_URL = "https://appy.trycatchtech.com/v3/maganlalchikki/";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;
export { BASE_URL };
