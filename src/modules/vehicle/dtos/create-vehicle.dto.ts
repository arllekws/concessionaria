/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty } from 'class-validator';
export class CreateVehicleDto {
    @IsNotEmpty()
    number: number;

    @IsNotEmpty()
    license_plate: string;

    @IsNotEmpty()
    color: string;

    @IsNotEmpty()
    manufacture_year: string;

    @IsNotEmpty()
    mileage: string;

    @IsNotEmpty()
    user_id: string;

    @IsNotEmpty()
    car_model_id: string;
}
