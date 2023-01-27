import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from './typeorm/entities/post.entity';
import { Profile } from './typeorm/entities/profile.entity';
import { User } from './typeorm/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    username:'root',
    password:'piyush9648@',
    database:'course',
    entities:[User,Profile,Post],
    synchronize:true,
    logging:true

  }),
  UsersModule


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
