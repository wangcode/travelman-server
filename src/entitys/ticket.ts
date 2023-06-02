import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum TicketType {
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
    price: number;
}