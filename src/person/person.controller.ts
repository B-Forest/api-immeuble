import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Person')
@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  @ApiOperation({ summary: 'Create one person' })
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all persons' })
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one person' })
  findOne(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one person' })
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one person' })
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
