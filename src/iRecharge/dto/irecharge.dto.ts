import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ArticleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

}



export class ProviderDto {
  @IsNotEmpty()
  @IsString()
  name: string;

}


export class PriceDto {
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  provider_id: number;

  @IsNotEmpty()
  @IsNumber()
  article_id: number;

  @IsNotEmpty()
  @IsNumber()
  currency_id: number;



}



export class CurrencyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  symbol:string

}
