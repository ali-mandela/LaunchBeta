import axios from "axios";

const API = axios.create({
    basURl : 'http://localhost:3001'
});

export default API;