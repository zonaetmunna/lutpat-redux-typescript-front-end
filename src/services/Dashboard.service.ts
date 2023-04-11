import { IDashboardStats } from '../types';
import httpReq from './http.service';

class DashboardService {
    async getStats(): Promise<IDashboardStats> {
        const { data } = await httpReq.get('/dashboard/stats');
        return data;
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new DashboardService();