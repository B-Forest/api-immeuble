import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { changeOwnerDto } from './dto/change-owner.dto';
import { addTenantsDto } from './dto/add-tenants.dto';


@ApiTags('Appartments')
@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create an apartment' })
  create(@Body() createApartmentDto: CreateApartmentDto) {
    return this.apartmentService.create(createApartmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all apartments' })
  findAll() {
    return this.apartmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one apartment' })
  findOne(@Param('id') id: string) {
    return this.apartmentService.findOne(+id);
  }

  @Patch('/owner/:id')
  @ApiOperation({ summary: 'Define/Change the owner of one apartment' })
  changeOwner(@Param('id') id: string, @Body() changeOwnerDto: changeOwnerDto){
    return this.apartmentService.changeOwner(+id, changeOwnerDto)
  }

  @Patch('/tenants/:id')
  @ApiOperation({ summary: 'Add tenants of one apartment' })
  addTenant(@Param('id') id: string, @Body() addTenantsDto: addTenantsDto){
    return this.apartmentService.addTenant(+id, addTenantsDto)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one apartment' })
  update(@Param('id') id: string, @Body() updateApartmentDto: UpdateApartmentDto) {
    return this.apartmentService.update(+id, updateApartmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one apartment' })
  remove(@Param('id') id: string) {
    return this.apartmentService.remove(+id);
  }
}
