import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingService } from './building.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { AddFacilityDto } from './dto/add-facilities.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('buildings')
@Controller('building')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @Post()
  @ApiOperation({ summary: 'Create an building' })
  create(@Body() createBuildingDto: CreateBuildingDto) {
    return this.buildingService.createBuilding(createBuildingDto);
  }

  @Post(':id')
  @ApiOperation({ summary: 'Add a facility to a building' })
  addFacilities(@Param('id') id:number, @Body() AddFacilityDto: AddFacilityDto){
    return this.buildingService.assignFacilitiesAndCreateTable(id,AddFacilityDto)
  }

  @Get()
  @ApiOperation({ summary: 'Get all buildings' })
  findAll() {
    return this.buildingService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an building' })
  findOne(@Param('id') id: string) {
    return this.buildingService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an building' })
  update(@Param('id') id: string, @Body() updateBuildingDto: UpdateBuildingDto) {
    return this.buildingService.update(+id, updateBuildingDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an building' })
  remove(@Param('id') id: string) {
    return this.buildingService.remove(+id);
  }
}
