import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { BaseRespositoryService } from '../../base-repository.service';
import { Article } from '../../core/entity/article.entity';
import { DataSource } from 'typeorm';
import { ArticleDto } from '../dto/irecharge.dto';

@Injectable()
export class ArticleService extends BaseRespositoryService<Article> {
  private readonly logger = new Logger(Article.name);
  constructor(datasource: DataSource) {
    super(Article, datasource);
  }

  async getAllArticles() {
    try {
      return await this.find({});
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async addArticle(article: ArticleDto) {
    try {

      const res = this.baseRepository.create({
        ...article,
      });
      return await this.baseRepository.save(res);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async updateArticle(id: number, article: ArticleDto) {
    try {
      const data = await this.getArticleById(id);

      return this.baseRepository.save({
        ...data,
        ...article,
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async getArticleById(id: number) {
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

  async deleteArticle(id: number) {
    try {
      await this.baseRepository.delete(id);

      return {
        response: 'Article deleted',
      };
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
