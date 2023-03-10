import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  imageURL: string;

  @IsString()
  des: string;

  @IsString()
  price: string;

  @IsString()
  brand: string;

  @IsString()
  category: string;

  @IsNumber()
  ratings: number;

  @IsString()
  reviews: string;

  @IsString()
  ordersId: number;
}
