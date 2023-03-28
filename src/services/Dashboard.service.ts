import { IDashboardStats } from '../types';
import requests from './http.service';

class DashboardService {
    getStats(): Promise<IDashboardStats> {
        return requests.get('/dashboard/stats');
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new DashboardService();