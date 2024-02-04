import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    Logger,
    NotFoundException,
  } from '@nestjs/common';
  import { BaseRespositoryService } from '../../base-repository.service';
  import { Currency } from '../../core/entity/currency.entity';
  import { DataSource } from 'typeorm';
  import { CurrencyDto } from '../dto/irecharge.dto';
  
  @Injectable()
  export class CurrencyService extends BaseRespositoryService<Currency> {
    private readonly logger = new Logger(Currency.name);
    constructor(datasource: DataSource) {
      super(Currency, datasource);
    }
  
    async getAllCurrencys() {
      try {
        return await this.find({       
        });
      } catch (error) {
        throw new NotFoundException();
      }
  
    }
  
    async addCurrency(currency: CurrencyDto) {
      try {
        // Create point from lat/lon
  
        const res = this.baseRepository.create({
          ...currency,
  
          
        });
        return await this.baseRepository.save(res);
      } catch (error) {
        throw new InternalServerErrorException();
      }
    }
  
    async updateCurrency(id: number, currency: CurrencyDto) {
      try {
        const data = await this.getCurrencyById(id);
  
        return this.baseRepository.save({
          ...data,
          ...currency,
  
        });
      } catch (error) {
        throw new BadRequestException();
      }
    }
  
    async getCurrencyById(id: number) {
      try {
        return await this.findOne({
          where: {
            id,
          },
        });
      } catch (error) {
        throw new NotFoundException();
      }
    }
  
    async deleteCurrency(id: number) {
      try {
        await this.baseRepository.delete(id);
  
        return {
          response: 'Currency deleted',
        };
      } catch (error) {
        throw new NotFoundException();
      }
    }
  }
  