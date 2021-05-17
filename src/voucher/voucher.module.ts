
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherResolver } from './voucher.resolver';
import { VoucherModel } from './voucher.model';

@Module({
  imports: [TypeOrmModule.forFeature([VoucherModel])],
  providers: [VoucherService, VoucherResolver],
  exports: [VoucherService]
})
export class VoucherModule {}