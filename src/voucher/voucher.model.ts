import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'voucher' })
export class VoucherModel {
  @Field()
  @PrimaryGeneratedColumn({ name: 'voucher_id' })
  voucherID: number

  @Field()
  @Column({ name: 'voucher_amount', type: 'decimal', precision: 13, scale: 2 })
  voucherAmount: number

  @Field()
  @Column({ name: 'partner_id', })
  partnerID: number

  @Field()
  @Column({ name: 'partner_name', length: 60  })
  partnerName: string

  @Field({ nullable: true })
  revenue: number
}