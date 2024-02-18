import { BuildingEntity } from 'src/building/entities/building.entity';
import { CommonFacilityEntity } from 'src/common-facility/entities/common-facility.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';


@Entity('Building_has_entity')
export class BuildingHasFacilityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    renovationDate: Date;

    @ManyToOne(()=>BuildingEntity, building => building.facilities)
    @JoinColumn()
    building: BuildingEntity;

    @ManyToOne(()=>CommonFacilityEntity, commonFacility => commonFacility.buildings)
    @JoinColumn()
    facilitie: BuildingEntity;
}

