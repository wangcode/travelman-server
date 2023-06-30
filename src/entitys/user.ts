import { BaseColumn } from "src/common/entity";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm"

@Entity()
export class User extends BaseColumn {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ default: true })
    isActrive: boolean;
}