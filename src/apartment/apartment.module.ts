import { Module, forwardRef } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { ApartmentController } from './apartment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentEntity } from './entities/apartment.entity';
import { BuildingModule } from 'src/building/building.module';
import { AddressModule } from 'src/address/address.module';
import { ApartmentTypeModule } from 'src/apartment-type/apartment-type.module';
import { ApartmentOptionModule } from 'src/apartment-option/apartment-option.module';
import { OwnerModule } from 'src/owner/owner.module';
import { TenantModule } from 'src/tenant/tenant.module';

@Module({
  imports: [forwardRef(()=>BuildingModule),TenantModule,OwnerModule,AddressModule, ApartmentTypeModule,ApartmentOptionModule, TypeOrmModule.forFeature([ApartmentEntity])],
  controllers: [ApartmentController],
  providers: [ApartmentService],
  exports:[ApartmentService]
})
export class ApartmentModule {}
