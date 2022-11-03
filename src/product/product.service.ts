import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model'

@Injectable()
export class ProductService {

  constructor(@InjectModel('Product') private productModel: Model<Product>) { }

  async create(user: string, password: string, age: number) {
    const newProduct = new this.productModel({
      user,
      password,
      age,
    })
    const result = await newProduct.save();
    return result.id as string;
  }

  async findAll() {
    const products = await this.productModel.find().exec();
    return products.map((prod) => ({ id: prod.id, user: prod.user, password: prod.password, age: prod.age }));
  }

  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);
    return { id: product.id, user: product.user, password: product.password, age: product.age };
  }

  async findProduct(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Could not find product');
    }
    if (!product) {
      throw new NotFoundException('Could not find product');
    }

    return product;
  }

  async update(productId: string, user: string, password: string, age: number) {
    const updateProduct = await this.findProduct(productId)
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

  async remove(prodId: string) {
    const result = this.productModel.deleteOne({ _id: prodId }).exec();
    return result;
  }
}
