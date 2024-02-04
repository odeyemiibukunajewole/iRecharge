import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { ProviderService } from '../service/provider.service';
import { ProviderDto} from '../dto/irecharge.dto';

@Controller('providers')
export class ProviderController {
  constructor(private provider: ProviderService) {}
  @Post()
  async createProvider(@Body() providerDto: ProviderDto) {
    return await this.provider.addProvider(providerDto);
  }

  @Get(':id')
  async getProvider(@Param('id') id: number) {
    return await this.provider.getProviderById(id);
  }

  @Get()
  async getProviders() {
    return await this.provider.getAllProviders();
  }

  @Put(':id')
  async updateProvider(
    @Param('id') id: number,
    @Body() updateProviderDto: ProviderDto,
  ) {
    return await this.provider.updateProvider(id, updateProviderDto);
  }

  @Delete(':id')
  async removeProvider(@Param('id') id: number) {
    return await this.provider.deleteProvider(id);
  }
}
