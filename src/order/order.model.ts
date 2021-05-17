import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { EmployeeModel } from './../employee/employee.model'

@ObjectType()
@Entity({ name: 'order' })
export class OrderModel {
  @Field()
  @PrimaryGeneratedColumn({ name: 'order_id' })
  orderID: number

  @Field()
  @Column({ name: 'order_date' })
  orderDate: Date

  @Column({ name: 'employee_id' })
  employeeID: number

  @Column({ name: 'voucher_id' })
  companyID: number

  @Field(type => [EmployeeModel], { nullable: true })
  @ManyToOne(
    () => EmployeeModel,
    employeeModel => employeeModel.orders, { createForeignKeyConstraints: false }
  )
  @JoinColumn({ name: 'employee_id', referencedColumnName: 'employeeID' })
  employee: EmployeeModel

}