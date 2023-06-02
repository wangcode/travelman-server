import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TicketType {
    TrainTicket,
}

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({enum: TicketType})
    ticketType: TicketType;

    @Column()
    position: string;

    @Column()
    attachment: string;

    @Column()
    price: number;

    @Column({type: "json"})
    data: string;
}