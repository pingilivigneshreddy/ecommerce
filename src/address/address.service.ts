import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  async create(createAddressDto: CreateAddressDto, id) {
    const address = new Address();
    address.address_line1 = createAddressDto.address_line1;
    address.address_line2 = createAddressDto.address_line2;
    address.city = createAddressDto.city;
    address.country = createAddressDto.country;
    address.mobile = createAddressDto.mobile;
    address.postalcode = createAddressDto.postalcode;
    // address.userId = id;

    return await address.save();
  }

  findAll() {
    return Address.find();
  }

  findOne(id: number) {
    return Address.findOne({ where: { id } });
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    const address = await Address.findOne({ where: { id } });
    if (!address) {
      throw new NotFoundException('Not Found');
    }
    if (updateAddressDto.address_line1) {
      address.address_line1 = updateAddressDto.address_line1;
    }
    if (updateAddressDto.address_line2) {
      address.address_line2 = updateAddressDto.address_line2;
    }
    if (updateAddressDto.city) {
      address.city = updateAddressDto.city;
    }
    if (updateAddressDto.country) {
      address.country = updateAddressDto.country;
    }
    if (updateAddressDto.mobile) {
      address.mobile = updateAddressDto.mobile;
    }
    if (updateAddressDto.postalcode) {
      address.postalcode = updateAddressDto.postalcode;
    }
    await address.save();

    return 'updated Succesfully';
  }

  async remove(id: number) {
    const address = await Address.findOne({ where: { id } });
    if (!address) {
      throw new NotFoundException('Not Found');
    }
    await address.remove();
    return `This action removes a #${id} record`;
  }
}
