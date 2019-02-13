let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(id, name) {
    this.id = driverId++;
    this.name = name;

    store.drivers.push(this);
  }
}

class Passenger {
  constructor(id, name) {
    this.id = passengerId++;
    this.name = name;
  }
}

class Trip {
  constructor(id, driverId, passengerId) {
    this.id = tripId++;
  }
}
