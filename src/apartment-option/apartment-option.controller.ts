import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApartmentOptionService } from './apartment-option.service';
import { CreateApartmentOptionDto } from './dto/create-apartment-option.dto';
import { UpdateApartmentOptionDto } from './dto/update-apartment-option.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Appartment option')
@Controller('apartment-option')
export class ApartmentOptionController {
  constructor(private readonly apartmentOptionService: ApartmentOptionService) {}

  @Post()
  @ApiOperation({ summary: 'Create an apartment option' })
  create(@Body() createApartmentOptionDto: CreateApartmentOptionDto) {
    return this.apartmentOptionService.create(createApartmentOptionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all apartment options' })
  findAll() {
    return this.apartmentOptionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an apartment option' })
  findOne(@Param('id') id: string) {
    return this.apartmentOptionService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an apartment option' })
  update(@Param('id') id: string, @Body() updateApartmentOptionDto: UpdateApartmentOptionDto) {
    return this.apartmentOptionService.update(+id, updateApartmentOptionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an apartment option' })
  remove(@Param('id') id: string) {
    return this.apartmentOptionService.remove(+id);
  }
}
