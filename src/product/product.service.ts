import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  async create(createProductDto: CreateProductDto) {
    const product = new Product();
    product.imageURL = createProductDto.imageURL;
    product.des = createProductDto.des;
    product.price = createProductDto.price;
    product.brand = createProductDto.brand;
    product.category = createProductDto.category;
    product.ratings = createProductDto.ratings;
    product.reviews = createProductDto.reviews;

    return await product.save();
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
