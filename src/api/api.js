import axios from "axios";

const api = axios.create({
    'qa': {
        baseURL: 'https://ex-ticket-to-go-back-end-qa.up.railway.app/'
    }
}[process.env.REACT_APP_ENV]);
export default api;