import axios, { type AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_EXCHANGE_RATE_API_BASE_URL,
    headers: {
        "Content-type": "application/json",
    },
});
export default apiClient;