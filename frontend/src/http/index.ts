import axios from 'axios'
import {AuthResponse} from "../types/UserSlice/user-interface";

export const API_URL = "http://localhost:5000/auth"

const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
    return config;
});

$api.interceptors.response.use(config => {
    return config
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
                withCredentials: true,
            });
            localStorage.setItem('token', response.data.token)
            return $api.request(originalRequest);
        } catch(e) {
            console.log('Не авторизован')
        }
    }
    throw error;
})

export default $api;