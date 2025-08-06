import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Vehicle } from './vehicle.entity';

@Module({
  imports:[SequelizeModule.forFeature([Vehicle])],
  controllers: [VehicleController],
  providers: [VehicleService]
})
export class VehicleModule {}
