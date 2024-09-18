import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
// import  {v4} from 'uuid'



@Injectable()
export class UsersService {

    private _users: CreateUserDto[] = []

    private _test: string = 'reer'

    private id: number = 1

    async getUsers(): Promise<CreateUserDto[]> {
        return this._users
    }

    async createUser(dto: CreateUserDto): Promise<CreateUserDto[]> {
        let id: number = this.id
        const value = {...dto, id}
        this._users.push(value)

        this.id += 1

        return this.getUsers()
    }


    // async getUser(email: string){
    //     const user = this._users.find( u => u.email === email)
    //     console.log(user)
    //     if (!user) {
    //         throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    //     }
    //     return user
    // }


    // async updateDescription(id: string, description: string): Promise<void> {
    //     const recipeIndex = this._users.findIndex((r) => r.id === id);
    //     if (recipeIndex < 0) {
    //       throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    //     }
    //     this._users[recipeIndex] = { ...this._users[recipeIndex], description };
    //   }
    
    //   async deleteRecipe(id: string): Promise<void> {
    //     this._users = this._users.filter((r) => r.id !== id);
    //   }
}
