import { Column, Entity, ManyToOne } from 'typeorm';
import { AppBaseEntity } from './base.enttity';
import { Provider } from './provider.entity';
import { Article } from './article.entity';
import { Currency } from './currency.entity';

@Entity({ name: 'price' })
export class Price extends AppBaseEntity {
  @Column()
  price: number;

  @ManyToOne(() => Article, (article) => article.prices)
  article: Article;

  @ManyToOne(() => Provider, (provider) => provider.prices)
  provider: Provider;

  @ManyToOne(() => Currency, (currency) => currency.prices)
  currency: Currency;
}
