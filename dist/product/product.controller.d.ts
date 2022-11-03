import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(prodName: string, prodPass: string, prodAge: number): Promise<{
        id: string;
    }>;
    findAll(): Promise<{
        id: string;
        user: string;
        password: string;
        age: number;
    }[]>;
    getProduct(prodId: string): Promise<{
        id: string;
        user: string;
        password: string;
        age: number;
    }>;
    update(prodId: string, prodName: string, prodPass: string, prodAge: number): Promise<any>;
    remove(prodId: string): Promise<any>;
}
