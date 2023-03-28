import requests from "./http.service";

// import { IStore } from 'types'
class StoreService {
  getStores(): Promise<any> {
    return requests.get('/store');
  }

  getStoreByID(id: string): Promise<any> {
    return requests.get(`/store/${id}`);
  }

  addStore(body: {}): Promise<any> {
    return requests.post(`/store/`, body);
  }

  updateStore(id: string, body: {}): Promise<any> {
    return requests.post(`/store/${id}`, body);
  }

  deleteStore(id: string): Promise<any> {
    return requests.delete(`/store/${id}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new StoreService();
