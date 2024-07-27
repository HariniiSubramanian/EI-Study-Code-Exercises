import readline from 'readline';
import { OfficeConfiguration } from './OfficeConfiguration';
import { Room } from './Room';
import { BookRoomCommand, CancelRoomBookingCommand } from './Commands';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const office = OfficeConfiguration.getInstance();

function mainMenu() {
    console.log(`
=========================================
  Welcome to Smart Office Management
=========================================
Please configure your office facility.

1. Set the number of meeting rooms
2. Set maximum capacity for a room
3. Book a room
4. Cancel a booking
5. Add occupants to a room
6. View room status
7. Exit
`);
    rl.question('Select an option: ', (option) => {
        switch (option.trim()) {
            case '1':
                setRoomCount();
                break;
            case '2':
                setRoomCapacity();
                break;
            case '3':
                bookRoom();
                break;
            case '4':
                cancelBooking();
                break;
            case '5':
                addOccupants();
                break;
            case '6':
                viewRoomStatus();
                break;
            case '7':
                exit();
                break;
            default:
                console.log('Invalid option. Please try again.');
                mainMenu();
                break;
        }
    });
}

function setRoomCount() {
    rl.question('Enter the number of meeting rooms: ', (count) => {
        console.log('[Loading...] Configuring office...');
        try {
            const roomCount = parseInt(count);
            if (isNaN(roomCount) || roomCount <= 0) {
                console.log('Invalid room count. Please enter a valid positive number.');
                mainMenu();
                return;
            }
            office.configureRooms(roomCount);
            console.log(`Office configured with ${roomCount} meeting rooms.`);
            const roomList = Array.from(office.getRooms().values())
                .map(room => `Room ${room.getId()}`)
                .join(', ');
            console.log(`Rooms available: ${roomList}`);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error('An unexpected error occurred.');
            }
        }
        mainMenu();
    });
}

function setRoomCapacity() {
    const rooms = Array.from(office.getRooms().values());
    if (rooms.length === 0) {
        console.log('No rooms are configured. Please configure the rooms first.');
        mainMenu();
        return;
    }

    console.log('[Loading...] Updating capacities...');
    let roomIndex = 0;

    function askCapacity() {
        if (roomIndex < rooms.length) {
            const room = rooms[roomIndex];
            rl.question(`Enter the maximum capacity for Room ${room.getId()}: `, (capacity) => {
                try {
                    const capacityNumber = parseInt(capacity);
                    if (isNaN(capacityNumber) || capacityNumber <= 0) {
                        console.log('Invalid capacity. Please enter a valid positive number.');
                        askCapacity();
                        return;
                    }
                    office.setRoomCapacity(room.getId(), capacityNumber);
                    console.log(`Room ${room.getId()} maximum capacity set to ${capacityNumber}.`);
                    roomIndex++;
                    askCapacity();
                } catch (error) {
                    if (error instanceof Error) {
                        console.error(error.message);
                    } else {
                        console.error(String(error));
                    }
                    askCapacity();
                }
            });
        } else {
            console.log('All room capacities updated.');
            mainMenu();
        }
    }

    askCapacity();
}



function bookRoom() {
    rl.question('Enter the room number to book: ', (roomId) => {
        rl.question('Enter start time (HH:MM, 24hr format): ', (startTime) => {
            if (!isValidTime(startTime)) {
                console.log('Invalid time format or time out of range. Please enter a valid time.');
                mainMenu();
                return;
            }

            rl.question('Enter duration in minutes: ', (duration) => {
                const durationMinutes = parseInt(duration);
                if (isNaN(durationMinutes) || durationMinutes <= 0) {
                    console.log('Please enter a positive number for the duration.');
                    mainMenu();
                    return;
                }

                console.log('[Processing...] Booking room...');
                try {
                    const room = office.getRoom(parseInt(roomId));
                    if (room) {
                        const command = new BookRoomCommand(room, durationMinutes, startTime);
                        command.execute();
                        if (command.wasSuccessful()) {
                            console.log(`Room ${roomId} booked from ${startTime} for ${durationMinutes} minutes.`);
                        } else {
                            console.log(`Room ${roomId} could not be booked.`);
                        }
                    } else {
                        console.log(`Room ${roomId} does not exist.`);
                    }
                } catch (error) {
                    if (error instanceof Error) {
                        console.log(error.message);  // Log only the error message
                    } else {
                        console.log('An unexpected error occurred. Please try again.');
                    }
                }
                mainMenu();
            });
        });
    });
}

function isValidTime(time: string): boolean {
    const [hour, minute] = time.split(':').map(Number);
    if (isNaN(hour) || isNaN(minute)) return false;
    if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return false;
    return true;
}


function cancelBooking() {
    rl.question('Enter the room number to cancel booking: ', (roomId) => {
        console.log('[Processing...] Cancelling booking...');
        try {
            const room = office.getRoom(parseInt(roomId));
            if (room) {
                const command = new CancelRoomBookingCommand(room); // Corrected to pass only the room object
                command.execute();
            } else {
                console.log(`Room ${roomId} does not exist or is not booked.`);
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(String(error));
            }
        }
        mainMenu();
    });
}



function addOccupants() {
    rl.question('Enter the room number: ', (roomId) => {
        rl.question('Enter the number of occupants: ', (occupants) => {
            console.log('[Processing...] Updating occupancy...');
            try {
                const room = office.getRoom(parseInt(roomId));
                if (room) {
                    room.addOccupants(parseInt(occupants));
                } else {
                    console.log(`Room ${roomId} does not exist.`);
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                } else {
                    console.error(String(error));
                }
            }
            mainMenu();
        });
    });
}

function viewRoomStatus() {
    rl.question('Enter the room number to view status: ', (roomId) => {
        const room = office.getRoom(parseInt(roomId));
        if (room) {
            const occupiedStatus = room.isRoomOccupied() ? 'Occupied' : 'Unoccupied';
            const lightsStatus = room.isLightsOn() ? 'On' : 'Off';
            const acStatus = room.isACOn() ? 'On' : 'Off';
            const occupancy = room.getOccupancy();
            console.log(`
  Room ${roomId}:
  Occupied            : ${occupiedStatus}
  Number of Occupants : ${occupancy}
  Lights              : ${lightsStatus}
  AC                  : ${acStatus}
`);
        } else {
            console.log(`Room ${roomId} does not exist.`);
        }
        mainMenu();
    });
}

function exit() {
    console.log('Thank you for using Smart Office Management. Goodbye!');
    rl.close();
}

mainMenu();
