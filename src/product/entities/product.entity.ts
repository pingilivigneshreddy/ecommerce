import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
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

  @ManyToMany(() => Order)
  orders: Order[];
}
