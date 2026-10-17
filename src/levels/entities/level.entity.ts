import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'

@Entity('levels')
export class Level {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()

    name!: string;

    @CreateDateColumn()

    createdAt!: Date;

    @UpdateDateColumn()

    updatedAt!: Date;


}
