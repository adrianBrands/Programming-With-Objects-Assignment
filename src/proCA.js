//----------Classes----------

//Parent
class Vehicle {
  constructor(jsObject) {
    this.wheels = jsObject.wheels;
    this.doors = jsObject.doors;
    this.color = jsObject.color;
  }
  descriptioon() {
    return `This veichle is ${this.color}, with ${this.wheels}x wheels, and ${this.doors} doors.`;
  }
}

//Child 1
class Car extends Vehicle {
  constructor(jsObject) {
    super(jsObject);
    this.topSpeed = jsObject.topSpeed;
  }
  getTopSpeed() {
    return `The top speed of this car is: ${this.topSpeed} miles per hour.`;
  }
}

//Child 2
class Truck extends Vehicle {
  constructor(jsObject) {
    super(jsObject);
    this.maxLoadWeight = jsObject.maxLoadWeight;
  }
  getMaxLoadWeight() {
    return `The maximum load weight for this truck is: ${this.maxLoadWeight} kilograms.`;
  }
}

//Vehicle Factory will create Vehicles of different types
class VehicleFactory {
  constructor(vehicleType) {
    this.vehicleType = vehicleType;
  }
  createVehicle(object) {
    switch (this.vehicleType) {
      case "car":
        return new Car(object);
      case "truck":
        return new Truck(object);
    }
  }
}

//------------Car Implementation-----------------

//Create Json string from schema
const json_car = '{"wheels": 20, "doors": 4, "color": "red"}';

//Convert JSON string to JS Object
const js_car = JSON.parse(json_car);

// Add top speed to the JS Object
js_car.topSpeed = 200;

//Create CarFactory and a Car
const carFactory = new VehicleFactory("car");
const newCar = carFactory.createVehicle(js_car);

console.log(newCar.descriptioon());
console.log(newCar.getTopSpeed());

//----------Truck Implementation-----------------

//Create JSON string from schema
const json_truck = '{"wheels": 22, "doors": 2, "color": "blue"}';

//Convert JSON string to JS Object
const js_truck = JSON.parse(json_truck);

//Add maxLoadWeight to the JS Obj
js_truck.maxLoadWeight = 2000;

//Create TruckFactory and a Truck
const truckFactory = new VehicleFactory("truck");
const newTruck = truckFactory.createVehicle(js_truck);

console.log(newTruck.descriptioon());
console.log(newTruck.getMaxLoadWeight());
