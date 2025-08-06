import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Vehicle } from './vehicle.entity';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { CreationAttributes } from 'sequelize'; // Import CreationAttributes from sequelize

@Injectable()
export class VehicleService {
    constructor( @InjectModel(Vehicle) private readonly vehicleModel: typeof Vehicle) 
    {}
    async createVehicle(vehicle: CreateVehicleDto) {
        const createdVehicle = await this.vehicleModel.create(vehicle as CreationAttributes<Vehicle>);
        return createdVehicle;
    }

    async findAll() {
        return await this.vehicleModel.findAll();
    }
}
