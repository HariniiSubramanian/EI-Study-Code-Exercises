// BookRoomCommand.ts

import { Room } from './Room';

export class BookRoomCommand {
    private room: Room;
    private duration: number;
    private startTime: string;
    private success: boolean;

    constructor(room: Room, duration: number, startTime: string) {
        this.room = room;
        this.duration = duration;
        this.startTime = startTime;
        this.success = false;
    }

    execute(): void {
        try {
            this.room.book(this.startTime, this.duration);
            this.success = true;
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);  // Log only the error message
            } else {
                console.log('An unexpected error occurred. Please try again.');
            }
            this.success = false;
        }
    }

    wasSuccessful(): boolean {
        return this.success;
    }
}
export class CancelRoomBookingCommand {
    private room: Room;
    

    constructor(room: Room) {
        this.room = room;
        
    }

    execute(): void {
        try {
            if (this.room.isRoomBooked()) {
                this.room.cancelBooking();
                console.log(`Booking canceled successfully.`);
            } else {
                console.log(`Room ${this.room.getId()} is not booked. Cannot cancel booking.`);
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(String(error));
            }
        }
    }
}
 

