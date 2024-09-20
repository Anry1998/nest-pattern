import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/users.dto';

import { FileInterceptor } from '@nestjs/platform-express';


import { Request } from 'express';
import { Query } from '@nestjs/common';

@Controller('users')
export class UsersController { 

    constructor(private usersService: UsersService){}

    @Get()
    async getUsers() {

        return 'Hello world!'
        return this.usersService.getUsers()
    }

    @Get('token')
    async getToken() {
        console.log('token')
        return 'token'
    }

    


    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200})
    // @ApiResponse({status: 200, type: User})
    // @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }


    // @Get('/:email')
    // async getUser(@Param() email: string) {
    //     return await this.usersService.getUser(email)

    //     return email
    // }

    // @Patch('/:id')
    // async updateDescription(
    //   @Body()  description : string,
    //   @Param('id') id: string,
    // ) {
    //   return await this.usersService.updateDescription(id, description);
    // }
  
    // @Delete('/:id')
    // async deleteRecipe(@Param('id') id: string) {
    //   return await this.usersService.deleteRecipe(id);
    // }

}
