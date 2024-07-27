// Sensor.ts

import { Room } from './Room';

export class OccupancySensor {
    constructor(private room: Room) {}

    detectOccupancyChange() {
        if (this.room.getOccupancy() >= 2) {
            this.room.turnOnACAndLights();
        } else {
            this.room.turnOffACAndLights();
        }
    }
}
