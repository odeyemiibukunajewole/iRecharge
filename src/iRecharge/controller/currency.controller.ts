import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  
  import { CurrencyService } from '../service/currency.service';
  import { CurrencyDto} from '../dto/irecharge.dto';
  
  @Controller('currencys')
  export class CurrencyController {
    constructor(private currency: CurrencyService) {}
    @Post()
    async createCurrency(@Body() currencyDto: CurrencyDto) {
      return await this.currency.addCurrency(currencyDto);
    }
  
    @Get(':id')
    async getCurrency(@Param('id') id: number) {
      return await this.currency.getCurrencyById(id);
    }
  
    @Get()
    async getCurrencys() {
      return await this.currency.getAllCurrencys();
    }
  
    @Put(':id')
    async updateCurrency(
      @Param('id') id: number,
      @Body() updateCurrencyDto: CurrencyDto,
    ) {
      return await this.currency.updateCurrency(id, updateCurrencyDto);
    }
  
    @Delete(':id')
    async removeCurrency(@Param('id') id: number) {
      return await this.currency.deleteCurrency(id);
    }
  }
  