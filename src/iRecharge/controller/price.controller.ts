import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  
  import { PriceService } from '../service/price.service';
  import { PriceDto} from '../dto/irecharge.dto';
  
  @Controller('Prices')
  export class PriceController {
    constructor(private price: PriceService) {}
    @Post()
    async createPrice(@Body() priceDto: PriceDto) {
      return await this.price.addPrice(priceDto);
    }
  
    @Get(':id')
    async getPrice(@Param('id') id: number) {
      return await this.price.getPriceById(id);
    }
  
    @Get()
    async getPrices() {
      return await this.price.getAllPrices();
    }
  
    @Put(':id')
    async updatePrice(
      @Param('id') id: number,
      @Body() updatePriceDto: PriceDto,
    ) {
      return await this.price.updatePrice(id, updatePriceDto);
    }
  
    @Delete(':id')
    async removePrice(@Param('id') id: string) {
      return await this.price.deletePrice(id);
    }
  }
  