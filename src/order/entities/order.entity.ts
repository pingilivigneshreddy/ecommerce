import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  oderId: number;

  @Column()
  userId: number;

  @OneToMany(() => Product, (product) => product.productId)
  products: Product[];

  @Column()
  orderprice: number;

  @Column()
  orderstatus: string;

  // @OneToMany(() => Address, (address) => address.userId)
  // address: Address[];
}
