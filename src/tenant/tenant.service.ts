import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { TenantEntity } from './entities/tenant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { BaseService } from 'src/@core/base-service'; 
import { PersonService } from 'src/person/person.service';

@Injectable()
export class TenantService extends BaseService<TenantEntity> {

  constructor(
    @InjectRepository(TenantEntity)
    private readonly repository: Repository<TenantEntity>,
    private readonly personService:PersonService, 
    protected readonly dataSource: DataSource,
  ) {
    super(dataSource);
  }

  async create(createTenantDto: CreateTenantDto): Promise<TenantEntity> {
    const tenant:TenantEntity = new TenantEntity();
    Object.assign(tenant, createTenantDto);
    return await this.saveEntities(tenant)?.[0];;
  }

  findAll(): Promise<TenantEntity[]> {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({where: { id }});
  }

  async update(id: number, updateTenantDto: UpdateTenantDto): Promise<TenantEntity> {
    const tenant = await this.repository.findOne({ where: { id } });
    if (!tenant){
      throw new NotFoundException('Tenant found ');
    }
    Object.assign(tenant,updateTenantDto)
    return this.repository.save(tenant);
  }

  async remove(id: number) {
    const result = await this.findOne(id);
    await this.repository.delete(id);
    return result;
  }
}
