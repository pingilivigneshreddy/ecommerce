import { Order } from 'src/order/entities/order.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column()
  imageURL: string;

  @Column()
  des: string;

  @Column()
  price: string;

  @Column()
  brand: string;

  @Column()
  category: string;

  @Column()
  ratings: number;

  @Column()
  reviews: string;

  @ManyToOne(() => Order, (order) => order.products)
  ordersId: Order;
}
