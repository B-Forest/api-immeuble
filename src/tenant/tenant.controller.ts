import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Tenant')
@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  @ApiOperation({ summary: 'Create one tenant' })
  create(@Body() createTenantDto: CreateTenantDto) {
    return this.tenantService.create(createTenantDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tenants' })
  findAll() {
    return this.tenantService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one tenant' })
  findOne(@Param('id') id: string) {
    return this.tenantService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one tenant' })
  update(@Param('id') id: string, @Body() updateTenantDto: UpdateTenantDto) {
    return this.tenantService.update(+id, updateTenantDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one tenant' })
  remove(@Param('id') id: string) {
    return this.tenantService.remove(+id);
  }
}
