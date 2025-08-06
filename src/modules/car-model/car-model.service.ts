import { Injectable } from '@nestjs/common';
import { CarModel } from './car-model.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateModelDto } from './dtos/create-model.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class CarModelService {
    constructor(
        @InjectModel(CarModel)
        private readonly carModelModel: typeof CarModel
    ) {}

    async create(carModel: CreateModelDto) {
        const createdCarModel = await this.carModelModel.create(carModel as CreationAttributes<CarModel>);
        return createdCarModel;
    }

    async findAll(){
        return await this.carModelModel.findAll();
    }
}
