import axios from 'axios';

import IsLoggedIn from "../components/IsLoggedIn";

const Api = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_ORIGIN}`,
    timeout: 1000,
    params: {},
});

Api.interceptors.request.use(IsLoggedIn);

export default Api;