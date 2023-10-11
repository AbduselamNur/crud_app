import { Min } from "class-validator";
import { IsNotEmpty, IsString, MinLength, IsEmail, MaxLength, IsPhoneNumber } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(30)
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsNotEmpty()
    phone: string;
}
