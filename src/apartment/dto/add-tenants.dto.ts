import { ApiProperty } from "@nestjs/swagger";
import { CreateTenantDto } from "src/tenant/dto/create-tenant.dto";



export class addTenantsDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    phoneNumber: string;
}
