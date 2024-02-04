import { Module } from '@nestjs/common';
import { ProviderService } from './service/provider.service';
import { ProviderController } from './controller/provider.controller';
import { ArticleController } from './controller/article.controller';
import { CurrencyController } from './controller/currency.controller';
import { PriceController } from './controller/price.controller';
import { ArticleService } from './service/article.service';
import { CurrencyService } from './service/currency.service';
import { PriceService } from './service/price.service';

@Module({
  imports: [],
  controllers: [
    ArticleController,
    ProviderController,
    CurrencyController,
    PriceController
  ],
  providers: [
    ProviderService,
    ArticleService,
    CurrencyService,
    PriceService
  ],
  exports: [],
})
export class iRrechargeModule {}
