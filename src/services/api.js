import axios from "axios";

/**
 * BUSCAR DADOS DA API 77SOL
 * @type {AxiosInstance}
 */
const Api = axios.create({
    baseURL: 'https://api2.77sol.com.br'
});

export default Api;