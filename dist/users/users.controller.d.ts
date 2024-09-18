import { UsersService } from './users.service';
import { CreateUserDto } from './dto/users.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<"Hello word!" | CreateUserDto[]>;
    getToken(): Promise<string>;
    create(userDto: CreateUserDto): Promise<CreateUserDto[]>;
}
