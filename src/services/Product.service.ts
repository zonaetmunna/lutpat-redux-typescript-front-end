import { IProduct } from "../types";
import requests from "./http.service";

class ProductService {
    getProducts(): Promise<IProduct[]> {
        return requests.get('/product');
    }

    getMerchantsProducts(): Promise<IProduct[]> {
        return requests.get('/merchant/products');
    }

    getProductByID(id: string): Promise<IProduct> {
        return requests.get(`/product/${id}`);
    }

    addProduct(body: {}): Promise<IProduct> {
        return requests.post(`/product/`, body);
    }

    updateProduct(id: string, body: {}): Promise<IProduct> {
        return requests.post(`/product/${id}`, body);
    }

    deleteProduct(id: string): Promise<IProduct> {
        return requests.delete(`/product/${id}`);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();
