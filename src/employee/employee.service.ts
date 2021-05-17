import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeModel } from './employee.model';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeModel)
    private employeeRepository: Repository<EmployeeModel>,
  ) {}

  async getDataWithOrders(): Promise<EmployeeModel[]> {
    return await this.employeeRepository.find({ relations: ['orders'] });
  }
}
