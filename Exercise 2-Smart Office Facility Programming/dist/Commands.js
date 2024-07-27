"use strict";
// BookRoomCommand.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelRoomBookingCommand = exports.BookRoomCommand = void 0;
class BookRoomCommand {
    constructor(room, duration, startTime) {
        this.room = room;
        this.duration = duration;
        this.startTime = startTime;
        this.success = false;
    }
    execute() {
        try {
            this.room.book(this.startTime, this.duration);
            this.success = true;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message); // Log only the error message
            }
            else {
                console.log('An unexpected error occurred. Please try again.');
            }
            this.success = false;
        }
    }
    wasSuccessful() {
        return this.success;
    }
}
exports.BookRoomCommand = BookRoomCommand;
class CancelRoomBookingCommand {
    constructor(room) {
        this.room = room;
    }
    execute() {
        try {
            if (this.room.isRoomBooked()) {
                this.room.cancelBooking();
                console.log(`Booking canceled successfully.`);
            }
            else {
                console.log(`Room ${this.room.getId()} is not booked. Cannot cancel booking.`);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            else {
                console.error(String(error));
            }
        }
    }
}
exports.CancelRoomBookingCommand = CancelRoomBookingCommand;
