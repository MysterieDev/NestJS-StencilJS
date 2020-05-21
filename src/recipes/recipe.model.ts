import { ApiProperty } from "@nestjs/swagger";
import { isString } from "util";

export class Recipe{

    @ApiProperty()
    public id: string;
    @ApiProperty()
    public name: string;
    @ApiProperty()
    public description: string;
    @ApiProperty()
    public rating: number;
}