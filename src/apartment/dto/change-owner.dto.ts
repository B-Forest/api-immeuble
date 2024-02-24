import { ApiProperty } from "@nestjs/swagger";


export class changeOwnerDto {
    @ApiProperty()
    ownerId:number;
}
