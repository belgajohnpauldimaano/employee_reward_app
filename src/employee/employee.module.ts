
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { EmployeeModel } from './employee.model';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeModel])],
  providers: [EmployeeService, EmployeeResolver],
  exports: [EmployeeService]
})
export class EmployeeModule {}