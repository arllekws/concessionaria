import { Body, Controller,  Delete,  Get,  Param,  Patch,  Post } from '@nestjs/common';
import { CreateBrandDto } from './dtos/create-brand.dto';
import { UpdateBrandDto } from './dtos/update-brand.dto';
import { BrandService } from './brand.service';

@Controller('brand')
export class BrandController {
    constructor(private readonly brandService: BrandService) {}

    @Post()
    async create(@Body() data: CreateBrandDto) {
        return await this.brandService.create(data);
    }

    @Get()
    async findAll() {
        return await this.brandService.findAll();
    }

    @Patch(':brand_id')
    async update(
        @Param('brand_id') brand_id: string, @Body() brandData: UpdateBrandDto) {
        return await this.brandService.update(brand_id, brandData);
    }

    @Delete(':brand_id')
    async delete(@Param('brand_id') brand_id: string) {
        return await this.brandService.delete(brand_id);
    }
}
