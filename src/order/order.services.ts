import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderModel } from './order.model'

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(OrderModel)
    private employeeRepository: Repository<OrderModel>
  ) { }
  
  async getData(): Promise<OrderModel[]>{
    return await this.employeeRepository.find({})
  }

  async getDataW(): Promise<OrderModel[]>{
    return await this.employeeRepository.find({ })
  }
}