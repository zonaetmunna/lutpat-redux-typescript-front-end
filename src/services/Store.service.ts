import httpReq from "./http.service";

// import { IStore } from 'types'
class StoreService {
  getStores(): Promise<any> {
    return httpReq.get('/store');
  }

  getStoreByID(id: string): Promise<any> {
    return httpReq.get(`/store/${id}`);
  }

  addStore(body: {}): Promise<any> {
    return httpReq.post(`/store/`, body);
  }

  updateStore(id: string, body: {}): Promise<any> {
    return httpReq.post(`/store/${id}`, body);
  }

  deleteStore(id: string): Promise<any> {
    return httpReq.delete(`/store/${id}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new StoreService();
