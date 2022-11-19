import axios from "axios";

const API = axios.create({
    basURL : 'http://localhost:3001',
});

export default API;