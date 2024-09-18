import { CreateUserDto } from './dto/users.dto';
export declare class UsersService {
    private _users;
    private _test;
    private id;
    getUsers(): Promise<CreateUserDto[]>;
    createUser(dto: CreateUserDto): Promise<CreateUserDto[]>;
}
