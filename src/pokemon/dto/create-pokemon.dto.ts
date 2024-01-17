import { IsInt, IsString, Min, MinLength } from "class-validator";


export class CreatePokemonDto {

    @IsInt()
    @IsInt()
    @Min(1)
    no: number;

    @IsString()
    @MinLength(1)
    name: string;

}
