import { Column, Entity, OneToMany } from 'typeorm';
import { AppBaseEntity } from './base.enttity';
import { Price } from './price.entity';

@Entity({ name: 'article' })
export class Article extends AppBaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Price, (price) => price.article)
  prices: Price[]
}
