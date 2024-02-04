import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  
  import { ArticleService } from '../service/article.service';
  import { ArticleDto} from '../dto/irecharge.dto';
  
  @Controller('articles')
  export class ArticleController {
    constructor(private article: ArticleService) {}
    @Post()
    async createArticle(@Body() articleDto: ArticleDto) {
      return await this.article.addArticle(articleDto);
    }
  
    @Get(':id')
    async getArticle(@Param('id') id: number) {
      return await this.article.getArticleById(id);
    }
  
    @Get()
    async getArticles() {
      return await this.article.getAllArticles();
    }
  
    @Put(':id')
    async updateArticle(
      @Param('id') id: number,
      @Body() updateArticleDto: ArticleDto,
    ) {
      return await this.article.updateArticle(id, updateArticleDto);
    }
  
    @Delete(':id')
    async removeArticle(@Param('id') id: number) {
      return await this.article.deleteArticle(id);
    }
  }
  