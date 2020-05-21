import { ApiProperty } from "@nestjs/swagger";

export class Recipe{
    constructor(
        public id,
        public name,
        public description,
        public rating,
    ){}
}