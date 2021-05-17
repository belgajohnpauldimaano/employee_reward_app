import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

import { OrderModel } from './../order/order.model'

@ObjectType()
@Entity({ name: 'employee' })
export class EmployeeModel {
  @Field()
  @PrimaryGeneratedColumn({ name: 'employee_id' })
  employeeID: number

  @Field()
  @Column('varchar', { name: 'employee_name', length: 80 })
  employeeName: string

  @Field()
  @Column({ name: 'montly_budget', type: 'decimal', precision: 13, scale: 2 })
  monthlyBudget: number

  @Field()
  @Column({ name: 'company_id' })
  companyID: number

  @Field()
  @Column('varchar', { length: 60 })
  companyTitle: string 

  @Field(type=> [OrderModel], { nullable: true })
  @OneToMany(
    () => OrderModel,
    OrderModel => OrderModel.employee, { createForeignKeyConstraints: false, eager: true }
  )
  @JoinColumn({ name: 'employee_id', referencedColumnName: 'employee_id' })
  orders: OrderModel[]
}