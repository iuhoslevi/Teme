function Vehicle() {
  this.name = "";
  this.cc = 0;
  this.wheels = 0;
}

function Motorcycle(settings) {
  Vehicle.call(this);
  const { name, cc, wheels } = settings;
  this.name = name;
  this.cc = cc;
  this.wheels = wheels;
}

function Car(settings) {
  Vehicle.call(this);
  const { name, cc, wheels } = settings;
  this.name = name;
  this.cc = cc;
  this.wheels = wheels;
}

var motorcycle1 = new Motorcycle({
  name: "Honda",
  cc: 600,
  wheels: 2,
});

var car1 = new Car({
  name: "Volvo",
  cc: 1700,
  wheels: 4,
});

function Fleet(...vehicles) {
  this.vehicles = vehicles;
}

let allVehicles = new Fleet(motorcycle1, car1);
console.log(allVehicles);

function totalWheels() {
  return motorcycle1.wheels + car1.wheels;
}
console.log("Total wheels in my fleet :" + totalWheels());
