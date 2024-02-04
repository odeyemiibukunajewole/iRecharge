import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { BaseRespositoryService } from '../../base-repository.service';
import { Provider } from '../../core/entity/provider.entity';
import { DataSource } from 'typeorm';
import { ProviderDto } from '../dto/irecharge.dto';

@Injectable()
export class ProviderService extends BaseRespositoryService<Provider> {
  private readonly logger = new Logger(Provider.name);
  constructor(datasource: DataSource) {
    super(Provider, datasource);
  }

  async getAllProviders() {
    try {
      return await this.find({       
      });
    } catch (error) {
      throw new NotFoundException();
    }

  }

  async addProvider(provider: ProviderDto) {
    try {
      // Create point from lat/lon

      const res = this.baseRepository.create({
        ...provider,

        
      });
      return await this.baseRepository.save(res);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateProvider(id: number, provider: ProviderDto) {
    try {
      const data = await this.getProviderById(id);

      return this.baseRepository.save({
        ...data,
        ...provider,

      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async getProviderById(id: number) {
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

  async deleteProvider(id: number) {
    try {
      await this.baseRepository.delete(id);

      return {
        response: 'Provider deleted',
      };
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
