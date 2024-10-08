import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto{
    @ApiProperty({example: 'user@email.ru', description: 'Почтовый адрес'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некоректный email'})
    readonly email: string
    @ApiProperty({example: 'Aa12345!', description: 'Пароль пользователя'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
    readonly password: string
}

