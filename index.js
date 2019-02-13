let driverId = 0;

class Driver {
  constructor(id, name) {
    this.id = driverId++;
    this.name = name;
  }
}

let passengerId = 0;

class Passenger {
  constructor(id, name) {
    this.id = passengerId++;
    this.name = name;
  }
}

let tripId = 0;

class Trip {
  constructor(id, driverId, passengerId) {
    this.id = tripId++;
  }
}
