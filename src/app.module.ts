import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule, } from '@nestjs/typeorm'

import { EmployeeModule } from './employee/employee.module'
import { VoucherModule } from './voucher/voucher.module'

@Module({
  imports: [
    EmployeeModule,
    VoucherModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql'
    }),
    TypeOrmModule.forRoot({}),
  ],
})
export class AppModule {}
