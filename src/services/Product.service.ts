import { IProduct } from "../types";
import httpReq from "./http.service";

class ProductService {
    async getProducts(): Promise<IProduct[]> {
        // return httpReq.get('/product');
        const { data } = await httpReq.get("/products");
        return data;
    }

    async getMerchantsProducts(): Promise<any> {
        const { data } = await httpReq.get('/merchant/products');
        return data;
    }

    async getProductByID(id: string): Promise<IProduct> {
        const { data } = await httpReq.get(`/products/${id}`);
        return data;
    }

    async addProduct(body: {}): Promise<IProduct> {

        const { data } = await httpReq.post(`/products/`, body);
        return data
    }

    async updateProduct(id: string, body: {}): Promise<IProduct> {
        const { data } = await httpReq.update(`/product/`, body);
        return data
    }

    async deleteProduct(id: string): Promise<IProduct> {
        const { data } = await httpReq.delete(`/product/`);
        return data
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();
