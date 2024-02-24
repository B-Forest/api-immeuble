import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingHasFacilityService } from './building_has_facility.service';
import { CreateBuildingHasFacilityDto } from './dto/create-building_has_facility.dto';
import { UpdateBuildingHasFacilityDto } from './dto/update-building_has_facility.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Facility By Building')
@Controller('building-has-facility')
export class BuildingHasFacilityController {
  constructor(private readonly buildingHasFacilityService: BuildingHasFacilityService) {}

  @Post()
  @ApiOperation({ summary: 'Create info for the facility of one building' })
  create(@Body() createBuildingHasFacilityDto: CreateBuildingHasFacilityDto) {
    return this.buildingHasFacilityService.createwithDto(createBuildingHasFacilityDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all facilities from the buildings ' })
  findAll() {
    return this.buildingHasFacilityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one facility of a building' })
  findOne(@Param('id') id: string) {
    return this.buildingHasFacilityService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one facility of a building' })
  update(@Param('id') id: string, @Body() updateBuildingHasFacilityDto: UpdateBuildingHasFacilityDto) {
    return this.buildingHasFacilityService.update(+id, updateBuildingHasFacilityDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one facility of a building' })
  remove(@Param('id') id: string) {
    return this.buildingHasFacilityService.remove(+id);
  }
}
