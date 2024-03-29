import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { EmployeeSchema } from './employees/Schema/employee.schema';
import { UserSchema } from './users/schema/user.schema';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://renrithysak095:mplwd1PROw7uXqfs@nestcrud.dx5ijrb.mongodb.net/?retryWrites=true&w=majority&appName=NestCrud',
    ),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Employee', schema: EmployeeSchema },
    ]),
  ],
  controllers: [UsersController, EmployeesController],
  providers: [UsersService, EmployeesService],
})
export class AppModule {}
