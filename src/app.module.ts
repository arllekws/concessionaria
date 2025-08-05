import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { BrandModule } from './modules/brand/brand.module';
import { CarModelModule } from './modules/car-model/car-model.module';

@Module({
  imports: [UserModule, VehicleModule, BrandModule, CarModelModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
