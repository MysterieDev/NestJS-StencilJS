import { ApiProperty } from "@nestjs/swagger";

export class CreateRecipeDto{
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    rating: number
}