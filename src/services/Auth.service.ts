import { IAuthData } from '../types';
import requests from './http.service';

class AuthService {
    login(body: { email: string; password: string }): Promise<IAuthData> {
        return requests.post(`/auth/login`, body);
    }

    logout(): Promise<any> {
        return requests.get(`/auth/logout`);
    }
}


export default new AuthService();
