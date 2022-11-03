import { Model } from 'mongoose';
import { Product } from './product.model';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<Product>);
    create(user: string, password: string, age: number): Promise<string>;
    findAll(): Promise<{
        id: string;
        user: string;
        password: string;
        age: number;
    }[]>;
    getSingleProduct(productId: string): Promise<{
        id: string;
        user: string;
        password: string;
        age: number;
    }>;
    findProduct(id: string): Promise<Product>;
    update(productId: string, user: string, password: string, age: number): Promise<void>;
    remove(prodId: string): Promise<import("mongodb").DeleteResult>;
}
