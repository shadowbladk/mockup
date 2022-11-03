"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async create(user, password, age) {
        const newProduct = new this.productModel({
            user,
            password,
            age,
        });
        const result = await newProduct.save();
        return result.id;
    }
    async findAll() {
        const products = await this.productModel.find().exec();
        return products.map((prod) => ({ id: prod.id, user: prod.user, password: prod.password, age: prod.age }));
    }
    async getSingleProduct(productId) {
        const product = await this.findProduct(productId);
        return { id: product.id, user: product.user, password: product.password, age: product.age };
    }
    async findProduct(id) {
        let product;
        try {
            product = await this.productModel.findById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find product');
        }
        if (!product) {
            throw new common_1.NotFoundException('Could not find product');
        }
        return product;
    }
    async update(productId, user, password, age) {
        const updateProduct = await this.findProduct(productId);
        if (user) {
            updateProduct.user = user;
        }
        if (password) {
            updateProduct.password = password;
        }
        if (age) {
            updateProduct.age = age;
        }
        updateProduct.save();
    }
    async remove(prodId) {
        const result = this.productModel.deleteOne({ _id: prodId }).exec();
        return result;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map