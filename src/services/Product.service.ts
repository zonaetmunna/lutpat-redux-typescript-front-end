import { IProduct } from "../types";
import httpReq from "./http.service";

class ProductService {
    async getProducts(): Promise<IProduct[]> {
        // return httpReq.get('/product');
        const { data } = await httpReq.get("/product");
        return data;
    }

    async getMerchantsProducts(): Promise<any> {
        const { data } = httpReq.get('/merchant/products');
        return data;
    }

    async getProductByID(id: string): Promise<IProduct> {
        const { data } = httpReq.get(`/product/${id}`);
        return data;
    }

    async addProduct(body: {}): Promise<IProduct> {

        const { data } = httpReq.post(`/product/`, body);
        return data
    }

    updateProduct(id: string, body: {}): Promise<IProduct> {
        const { data } = httpReq.update(`/product/`, body);
        return data
    }

    deleteProduct(id: string): Promise<IProduct> {
        const { data } = httpReq.delete(`/product/`, body);
        return data
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();
