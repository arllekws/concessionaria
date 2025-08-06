/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty } from "class-validator";

export class CreateModelDto {
    @IsNotEmpty()
    number: number;
    @IsNotEmpty()
    describe: string;
    @IsNotEmpty()
    year: string;
    @IsNotEmpty()
    price: string;
    @IsNotEmpty()
    brand_id: string;
}