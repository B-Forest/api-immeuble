import { ApiProperty } from "@nestjs/swagger";
import { ApartmentOptionEntity } from "src/apartment-option/entities/apartment-option.entity";
import { TenantEntity } from "src/tenant/entities/tenant.entity";

export class CreateApartmentDto {
    @ApiProperty()
    buildingId: number;

    @ApiProperty()
    apartmentTypeId: number;

    @ApiProperty()
    floor: number;

    @ApiProperty()
    door: number;

    @ApiProperty({ type: [Number] })
    options: number[];
}
