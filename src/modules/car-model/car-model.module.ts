import { Module } from '@nestjs/common';
import { CarModelController } from './car-model.controller';
import { CarModelService } from './car-model.service';

@Module({
  controllers: [CarModelController],
  providers: [CarModelService]
})
export class CarModelModule {}
