import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    //   TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'password',
    //   database: 'app',
    //   entities: [],
    //   // если synchronize: true база данных удаляется и создается заново каждый раз, когда мы меняем схему
    //   synchronize: true,
    //   // функция входа в систему
    //   logging: true,
    // }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
