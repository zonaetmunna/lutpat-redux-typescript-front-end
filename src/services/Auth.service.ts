import { IAuthData } from "../types";
import httpReq from "./http.service";
// import requests from "./http.service";



class AuthService {
    async signup(body: any): Promise<IAuthData> {
        const { data } = await httpReq.post("/auth/signup", body);
        return data;
    }
    async login(body: { email: string; password: string }): Promise<IAuthData> {
        const { data } = await httpReq.post("/auth/login", body);
        return data;
    }
    async logout(): Promise<any> {
        return httpReq.get(`/auth/logout`);
    }
}

/* class AuthService {
    login(body: { email: string; password: string }): Promise<IAuthData> {
        return requests.post(`/auth/login`, body);
    }

    logout(): Promise<any> {
        return requests.get(`/auth/logout`);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService(); */


// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();

