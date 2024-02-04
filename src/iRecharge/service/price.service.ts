import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { BaseRespositoryService } from '../../base-repository.service';
import { Price } from '../../core/entity/price.entity';
import { DataSource } from 'typeorm';
import { PriceDto } from '../dto/irecharge.dto';
import { ArticleService } from './article.service';
import { ProviderService } from './provider.service';
import { CurrencyService } from './currency.service';

@Injectable()
export class PriceService extends BaseRespositoryService<Price> {
  private readonly logger = new Logger(Price.name);

  constructor(
    datasource: DataSource,
    private articleService: ArticleService,
    private currencyService: CurrencyService,
    private providerService: ProviderService,
  ) {
    super(Price, datasource);
  }

  async getAllPrices() {
    try {
      return await this.find({
        relations: ['provider','article','currency'],

      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async addPrice(priceDto: PriceDto) {
    try {
      // Create point from lat/lon

      const provider = await this.providerService.getProviderById(
        priceDto.provider_id,
      );
      if (!provider) throw new BadRequestException('Invalid provider id');
      const article = await this.articleService.getArticleById(
        priceDto.article_id,
      );
      if (!article) throw new BadRequestException('Invalid article id');

      const currency = await this.currencyService.getCurrencyById(
        priceDto.currency_id,
      );
      if (!currency) throw new BadRequestException('Invalid currency id');

      // const  price = new Price();
      // price.price=priceDto.price
      // price.provider=provider
      // price.article=article
      // price.currency=currency

      const res = this.baseRepository.create({
        price: priceDto.price,
        provider,
        article,
        currency,
      });
      await this.save(res);
      return;
    } catch (error) {
      console.log(error);
      if (Number(error.status) == 400)
        throw new BadRequestException(error.response.message);

      throw new InternalServerErrorException();
    }
  }

  async updatePrice(id: number, price: PriceDto) {
    try {
      const data = await this.getPriceById(id);

      return this.baseRepository.save({
        ...data,
        ...price,
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async getPriceById(id: number) {
    try {
      return await this.findOne({
        where: {
          id,
        },
        relations: ['provider','article','currency'],
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async deletePrice(id: string) {
    try {
      await this.baseRepository.delete(id);

      return {
        response: 'Price deleted',
      };
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
