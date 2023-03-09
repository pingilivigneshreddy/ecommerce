import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address_line1: string;

  @Column()
  address_line2: string;

  @Column()
  city: string;

  @Column()
  postalcode: string;

  @Column()
  country: string;

  @Column()
  mobile: string;

  @ManyToOne(() => User, (user) => user.address)
  userId: User;
}
