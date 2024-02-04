import { Column, Entity,  OneToMany } from 'typeorm';
import { AppBaseEntity } from './base.enttity';
import { Price } from './price.entity';

@Entity({ name: 'provider' })
export class Provider extends AppBaseEntity {
  @Column()
  name: string;
  
  @OneToMany(() => Price, (price) => price.provider)
  prices: Price[]
}
