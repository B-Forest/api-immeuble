import { ApiProperty } from "@nestjs/swagger";

export class CreateBuildingHasFacilityDto {
    @ApiProperty()
    renovationDate: Date;
}
