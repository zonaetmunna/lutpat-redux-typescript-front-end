import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';



const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 15000,
};

const instance: AxiosInstance = axios.create(axiosConfig);


// const baseUrl = process.env.REACT_APP_API_BASE_URL;
// console.log('baseUrl', baseUrl);

/* const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 15000,
};
 */
// const instance = axios.create({
//     baseURL: process.env.REACT_APP_API_BASE_URL,
//     timeout: 15000,
// });

// Add a request interceptor

// Add a request interceptor
// instance.interceptors.request.use((config) => {
//     // Do something before request is sent
//     console.log('Api is calling');
//     return {
//         ...config,
//         headers: {
//             Authorization: JSON.parse(
//                 JSON.parse(localStorage.getItem('persist:root') || '').auth
//             )?.data?.token,
//         },
//     };

// }, (error: AxiosError) => {
//     // Do something with request error
//     return Promise.reject(error)
// })


/* const responseBody = (response: AxiosResponse) => response.data.data; */

class Request {
    async get(url: string): Promise<AxiosResponse> {
        return instance.get(url).then((res) => res.data);
    }
    async post(url: string, body: any): Promise<AxiosResponse> {
        return instance.post(url, body).then((res) => res.data);
    }
    async update(url: string, body: any): Promise<AxiosResponse> {
        return instance.patch(url, body).then((res) => res.data);
    }
    async delete(url: string): Promise<AxiosResponse> {
        return instance.delete(url).then((res) => res.data);
    }
}

const httpReq = new Request();

export default httpReq;