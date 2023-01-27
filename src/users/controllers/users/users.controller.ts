import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UserPostDto } from 'src/users/dtos/createUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/createUserProfile.dto';

import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.findUsers();
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
  @Post(':id/profile')
  createProfile(
     @Param('id', ParseIntPipe) id: number,

    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    return this.userService.createUserProfile(id, createUserProfileDto);
  }

  @Post(':id/posts')
  createPost(
    @Param('id',ParseIntPipe) id:number, @Body() createUserPost:UserPostDto,
  ){
    return this.userService.createUserPost(id,createUserPost)
  }


}
