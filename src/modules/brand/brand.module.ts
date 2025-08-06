import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Brand } from './brand.entity';

@Module({
  imports: [SequelizeModule.forFeature([Brand])],
  providers: [BrandService],
  controllers: [BrandController]
})
export class BrandModule {}
