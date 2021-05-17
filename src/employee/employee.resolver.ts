import { Resolver, Query, ResolveField } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { EmployeeModel } from './employee.model';
import { EmployeeService } from './employee.service';
import { VoucherModel } from './../voucher/voucher.model'

@Resolver(of => EmployeeModel)
export class EmployeeResolver {
  constructor(
    @Inject(EmployeeService) private employeeService: EmployeeService,
  ) { }


  @ResolveField(returns => [VoucherModel])
  @Query(returns => [EmployeeModel])
  async getEmployees(): Promise<EmployeeModel[]>{
    const aaa =  await this.employeeService.getDataWithOrders()
    console.log(JSON.stringify(aaa), 'aaaa')
    return aaa
  }
}