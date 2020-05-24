import { ApiProperty, PartialType } from "@nestjs/swagger";

export class CreateRecipeDto{
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    rating: number
}

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {}