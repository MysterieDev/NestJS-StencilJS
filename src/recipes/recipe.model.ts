import { ApiProperty } from "@nestjs/swagger";
import { isString } from "util";

export class Recipe{

    @ApiProperty()
    public readonly id: string;
    @ApiProperty()
    public name: string;
    @ApiProperty()
    public description: string;
    @ApiProperty()
    public rating: number;
}