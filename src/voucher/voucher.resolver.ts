import { Resolver, Query, } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherModel } from './../voucher/voucher.model'

@Resolver(of => VoucherModel)
export class VoucherResolver {
  constructor(
    @Inject(VoucherService) private voucherService: VoucherService,
  ) { }

  @Query(returns => [VoucherModel])
  async getPartnerRevenue(): Promise<VoucherModel[]>{
    return  await this.voucherService.getPartnerRevenue()
  }
}