// OfficeConfiguration.ts

import { Room } from './Room';

export class OfficeConfiguration {
    private static instance: OfficeConfiguration;
    private rooms: Map<number, Room> = new Map();

    private constructor() {}

    public static getInstance(): OfficeConfiguration {
        if (!OfficeConfiguration.instance) {
            OfficeConfiguration.instance = new OfficeConfiguration();
        }
        return OfficeConfiguration.instance;
    }

    public configureRooms(count: number): void {
        for (let i = 1; i <= count; i++) {
            this.rooms.set(i, new Room(i));
        }
        console.log(`Office configured with ${count} meeting rooms.`);
    }

    public getRoom(id: number): Room | undefined {
        return this.rooms.get(id);
    }

    public getRooms(): Map<number, Room> {
        return this.rooms;
    }

    public setRoomCapacity(id: number, capacity: number): void {
        const room = this.getRoom(id);
        if (room) {
            room.setMaxCapacity(capacity);
        } else {
            throw new Error(`Room ${id} does not exist.`);
        }
    }
}
