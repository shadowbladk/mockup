import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')

export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  async createProduct(
    @Body('user') prodName: string,
    @Body('password') prodPass: string,
    @Body('age') prodAge: number,) {
    const generatedId = await this.productService.create(
      prodName,
      prodPass,
      prodAge,
    );
    return { id: generatedId };
  }

  @Get()
  async findAll() {
    const product = await this.productService.findAll();
    return product;
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productService.getSingleProduct(prodId);
  }

  @Patch(':id')
  async update(
    @Param('id') prodId: string,
    @Body('user') prodName: string,
    @Body('password') prodPass: string,
    @Body('age') prodAge: number) {
    await this.productService.update(prodId, prodName, prodPass, prodAge);
    return null;
  }

  @Delete(':id')
  async remove(@Param('id') prodId: string) {
    await this.productService.remove(prodId);
    return null;
  }
}
