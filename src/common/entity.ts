import { CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";

export abstract class BaseColumn {

    @CreateDateColumn('create_at')
    createAt: Date;

    @UpdateDateColumn('update_at')
    updateAt: Date;

    @VersionColumn()
    __version: number;
}