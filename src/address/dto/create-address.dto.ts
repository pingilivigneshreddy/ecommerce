import { IsMobilePhone, IsNumber, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  address_line1: string;
  @IsString()
  address_line2: string;

  @IsString()
  city: string;
  @IsNumber()
  postalcode: string;

  @IsString()
  country: string;

  @IsMobilePhone()
  mobile: string;

  @IsNumber()
  userId: number;
}
