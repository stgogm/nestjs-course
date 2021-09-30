import {
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  Column,
  Entity,
} from 'typeorm';

import { Flavor } from './flavors.entity';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable() // 👈 Join the 2 tables - only the OWNER-side does this
  @ManyToMany(
    () => Flavor,
    (flavor) => flavor.coffees, // what is "coffee" within the Flavor Entity
    {
      cascade: true, // 👈 or optionally just insert or update ['insert']
    },
  )
  flavors: Flavor[];

  @Column({ default: 0 })
  recommendations: number;
}
