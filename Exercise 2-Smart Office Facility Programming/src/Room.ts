// Room.ts
type Booking = { startTime: string; endTime: string };

export class Room {
    private id: number;
    private isOccupied: boolean;
    private maxCapacity: number;
    private occupancyCount: number;
    private isBooked: boolean;
    private bookingEndTime: Date | null;
    private bookings: Booking[] = [];
    private bookingStartTime: Date | null = null;

    constructor(id: number, maxCapacity: number = 10) {
        this.id = id;
        this.maxCapacity = maxCapacity;
        this.isOccupied = false;
        this.occupancyCount = 0;
        this.isBooked = false;
        this.bookingEndTime = null;
    }

    public isLightsOn(): boolean {
        return this.isOccupied;
    }
    

    public setOccupied(occupied: boolean) {
        this.isOccupied = occupied;
        if (this.isOccupied) {
            this.turnOnACAndLights();
        } else {
            this.turnOffACAndLights();
        }
    }
    
    
    public isACOn(): boolean {
        return this.isOccupied;
    }

    

    public isRoomOccupied(): boolean {
        return this.isOccupied;
    }

    public getId(): number {
        return this.id;
    }

    public getMaxCapacity(): number {
        return this.maxCapacity;
    }

    public setMaxCapacity(capacity: number) {
        if (capacity > 0) {
            this.maxCapacity = capacity;
        } else {
            throw new Error("Invalid capacity. Please enter a valid positive number.");
        }
    }

    public getOccupancy(): number {
        return this.occupancyCount;
    }

    public addOccupants(count: number): void {
        if (!this.isBooked) {
            console.log(`Room ${this.id} is not booked. Cannot add occupants.`);
            return;
        }

        if (count < 0) {
            throw new Error("Number of occupants cannot be negative.");
        }

        if (this.occupancyCount + count > this.maxCapacity) {
            console.log(`Limit exceeded. Only ${this.maxCapacity} occupants can be added.`);
            return;
        }

        this.occupancyCount += count;
        this.isOccupied = this.occupancyCount > 0;

        if (this.isOccupied) {
            this.turnOnACAndLights();
        } else {
            this.turnOffACAndLights();
        }

        console.log(`Added ${count} occupants to Room ${this.id}. Current occupancy: ${this.occupancyCount}`);
    }

    public canBook(startTime: Date, duration: number): boolean {
        if (this.bookingEndTime && startTime < this.bookingEndTime) {
            return false;
        }
        return true;
    }

    public isRoomBooked(): boolean {
        return this.bookings.length > 0;
    }

    book(startTime: string, duration: number): void {
        // Check if the room is available for the given time slot
        const [startHour, startMinute] = startTime.split(':').map(Number);
        const endHour = startHour + Math.floor((startMinute + duration) / 60);
        const endMinute = (startMinute + duration) % 60;
        const endTime = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;


        for (const booking of this.bookings) {
            if (
                (startTime >= booking.startTime && startTime < booking.endTime) ||
                (endTime > booking.startTime && endTime <= booking.endTime) ||
                (startTime <= booking.startTime && endTime >= booking.endTime)
            ) {
                throw new Error(`Room ${this.id} is already booked during this time.`);
            }
        }

        // If no conflict, book the room
        this.bookings.push({ startTime, endTime });
        this.bookingStartTime = new Date(); // Set the booking start time
        this.isBooked = true;
        console.log(`Room ${this.id} booked from ${startTime} to ${endTime}.`);
        setTimeout(() => this.checkAndReleaseBookingIfUnoccupied(), 5 * 60 * 1000);
    }

    public cancelBooking(): void {
        if (this.bookings.length === 0) {
            throw new Error(`Room ${this.id} is not booked. Cannot cancel booking.`);
        }
        this.bookings.pop();// Removes the latest booking
        this.isBooked = false;
        this.occupancyCount = 0;
        this.setOccupied(false);
        console.log(`Booking for Room ${this.id} cancelled.`);
        this.turnOffACAndLights(); 
    }

    public turnOnACAndLights(): void {
        if (this.isOccupied) {
            console.log(`AC and lights turned on in Room ${this.id}.`);
        }
    }

    public turnOffACAndLights(): void {
        if (!this.isOccupied) {
            console.log(`AC and lights turned off in Room ${this.id}.`);
        }
    }

    public checkAndReleaseBookingIfUnoccupied(): void {
        if (!this.isOccupied && this.isBooked && this.bookingStartTime) {
            const now = new Date();
            const timeDifference = (now.getTime() - this.bookingStartTime.getTime()) / (1000 * 60); // time in minutes
            if (timeDifference >= 5) {
                console.log(`Room ${this.id} was not occupied within 5 minutes. Releasing booking.`);
                this.cancelBooking();
                this.turnOffACAndLights();
        }
    }
}
}
