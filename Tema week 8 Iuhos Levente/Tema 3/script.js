const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};

const {
  address: { street },
} = person;

const car = {
  name: "Toyota",
  settings: {
    color: "white",
    doors: 5,
  },
};

const { name } = person;
const newCar = { ...car, modelYear: 2022, wheels: 4, engine: 2.0 };
const { color, doors } = car.settings;
const anotherCar = { ...car };
const newPerson = { ...person };
