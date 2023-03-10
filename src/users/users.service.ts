import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { getConnection, getManager, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const user = new User();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    return user.save();
  }

  async findAll() {
    return await User.find({
      relations: {
        address: true,
      },
    });
  }

  findOne(id: number) {
    return User.findOne({ where: { id } });
  }
  findByusername(username: string) {
    return User.findOne({ where: { username: username } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('Not Found');
    }

    user.username = updateUserDto.username;
    user.password = updateUserDto.password;

    await user.save();

    return {
      message: 'Updated',
    };
  }

  async remove(id: number) {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('Not Found');
    }
    await user.remove();
  }
}
