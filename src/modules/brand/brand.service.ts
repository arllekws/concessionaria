import { Injectable } from '@nestjs/common';
import { Brand } from './brand.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBrandDto } from './dtos/create-brand.dto';
import { UpdateBrandDto } from './dtos/update-brand.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class BrandService {
    constructor(
        @InjectModel(Brand)
        private readonly brandModel: typeof Brand
    ) {}

    async create(brand: CreateBrandDto) {
        const createdBrand = await this.brandModel.create(brand as CreationAttributes<Brand>);
        return createdBrand;
    }

    async findAll(){
        return await this.brandModel.findAll();
    }

    async update(brand_id: string, brand: UpdateBrandDto) {
        const updatedBrand = await this.brandModel.update(
            { ...brand },
            { where: { brand_id: brand_id } },
        );
        return updatedBrand;
    }

        async delete(brand_id: string) {
            return await this.brandModel.destroy({ where: { brand_id } });
        }
}