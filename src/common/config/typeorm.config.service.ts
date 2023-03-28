import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { BoardEntity } from '../../board/entities/board.entity';

@Injectable()
export class TypeormConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.config.get('DB_HOST'),
      port: this.config.get('DB_PORT'),
      username: this.config.get('DB_USERNAME'),
      password: this.config.get('DB_PASSWORD'),
      database: this.config.get('DB_DATABASE'),
      entities: [BoardEntity],
      synchronize: true,
    };
  }
}
