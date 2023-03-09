import { IsEmail, IsMobilePhone } from 'class-validator';
import { Address } from 'src/address/entities/address.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  @IsMobilePhone()
  mobile: string;

  @Column()
  @IsEmail()
  email: string;

  @OneToMany(() => Address, (address) => address.userId)
  address: Address[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
