import { ApiProperty } from "@nestjs/swagger";

export class CreateTenantDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    isPrincipal: boolean;
}
