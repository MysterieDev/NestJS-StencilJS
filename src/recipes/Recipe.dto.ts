import { ApiProperty, PartialType } from "@nestjs/swagger";

export class CreateRecipeDto{
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    rating: number
}

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {}