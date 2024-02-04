import { Column, Entity,  OneToMany } from 'typeorm';
import { AppBaseEntity } from './base.enttity';
import { Price } from './price.entity';

@Entity({ name: 'currrency' })
export class Currency extends AppBaseEntity {
  @Column()
  name: string;

  @Column()
  symbol: string;

  @OneToMany(() => Price, (price) => price.currency)
  prices: Price[]
 
}
