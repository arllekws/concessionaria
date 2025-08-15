import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CreateModelDto } from './dtos/create-model.dto';

@Controller('car-model')
export class CarModelController {
    constructor(private readonly carModelService: CarModelService) {}

    @Post()
    async createCarModel(@Body() createModelDto: CreateModelDto) {
        const carModel = await this.carModelService.create(createModelDto);
        return carModel;
    }

    @Get()
    async findAllCarModels() {
        return await this.carModelService.findAll();
    }
}