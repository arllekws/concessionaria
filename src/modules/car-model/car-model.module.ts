import { Module } from '@nestjs/common';
import { CarModelController } from './car-model.controller';
import { CarModelService } from './car-model.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarModel } from './car-model.entity';

@Module({
  imports:[SequelizeModule.forFeature([CarModel])],
  controllers: [CarModelController],
  providers: [CarModelService]
})
export class CarModelModule {}
