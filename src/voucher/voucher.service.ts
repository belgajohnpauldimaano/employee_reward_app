import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VoucherModel } from './voucher.model'

@Injectable()
export class VoucherService {
  constructor(
    @InjectRepository(VoucherModel)
    private voucherRepository: Repository<VoucherModel>
  ) { }
  
  async getPartnerRevenue(): Promise<VoucherModel[]>{
    return await this.voucherRepository.createQueryBuilder('voucher_outer')
      .select('partner_name', 'partnerName')
      .addSelect('((select sum(v.voucher_amount * 1) from "order" o join voucher v on v.voucher_id in(select v2.voucher_id from voucher v2 where v2.partner_name = voucher_outer.partner_name)))', 'revenue')
      .groupBy('voucher_outer.partner_name')
      .getRawMany()
  }
}