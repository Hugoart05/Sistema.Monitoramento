
import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig, isAxiosError } from "axios";
import UserUtils from "../storageUtils/UserUtils";
import { ApiPaternResponse, ApiResponse } from "../Types/ApiResponse";


function createAxiosInstance(): AxiosInstance {
    const baseURL: string = 'https://localhost:7103/api'
    const instancea: AxiosInstance = axios.create({
        baseURL,
        
    })

    instancea.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const token = UserUtils.GetToken()
            if (token)
                config.headers['Authorization'] = `Bearer ${token}`;

            return config
        },
        (error: AxiosError) => {
            return Promise.reject(error)
        }
    )

    return instancea;
}

export const api = createAxiosInstance()

export const ApiRequest = async <T>(
    endpoint: string,
    method: 'get' | 'post' | 'put' | 'delete',
    data?: any,
): Promise<ApiPaternResponse<T>> => {
    try {
        let response;
        switch (method) {
            case 'get':
                response = await api.get<ApiPaternResponse<T>>(endpoint)
                break
            case 'post':
                response = await api.post<ApiPaternResponse<T>>(endpoint, data)
                break
            case 'put':
                response = await api.put<ApiPaternResponse<T>>(endpoint,)
                break
            case 'delete':
                response = await api.delete<ApiPaternResponse<T>>(endpoint)
                break
                default:
                    throw new Error('Méthodo invalido')
        }
        return response.data;
    } catch (error) {
        if(isAxiosError(error))
            return error.response?.data
        
        throw new AxiosError(error)
    };
}


