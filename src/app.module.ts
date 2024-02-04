import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validate } from './configs/env.validation';
import ormConnectionConfig from './configs/orm.config';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';
import DatabaseLogger from './utils/database.logger';
import LogsMiddleware from './utils/logger.middleware';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { iRrechargeModule } from './iRecharge/irecharge.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]),
    ConfigModule.forRoot({ isGlobal: true, validate }),
    TypeOrmModule.forRoot({
      ...ormConnectionConfig,
      autoLoadEntities: true,
      logger: new DatabaseLogger(),
    }),
    iRrechargeModule,

  ],
  controllers: [AppController],
  providers: [
    AppService,
    LoggingInterceptor,
    {
      provide: APP_INTERCEPTOR,
      useExisting: LoggingInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
    
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogsMiddleware).forRoutes('*');
  }
}
