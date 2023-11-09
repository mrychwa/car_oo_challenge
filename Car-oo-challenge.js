//Part 1

class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        console.log("Beep")
    }
    toString(){
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`)
    }
}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."


//Part 2

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4


//Part 3

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        console.log("VROOM!!!")
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2


//Part 4

class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity; 
    }
    add(vehicle){
        if (this.vehicles.length < this.capacity){
            if(vehicle instanceof Vehicle){
                this.vehicles.push(vehicle);
                console.log("Vehicle added!");
            } else {
                console.log("Only vehicles are allowed in here!")
            }
        } else {
            console.log("Sorry, we're full.");
        }
    }
}

let garage = new Garage(2);
garage.vehicles;
garage.add(new Car("Hyundai", "Elantra", 2015));
garage.vehicles; 
garage.add("Taco"); 

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
garage.vehicles; 
garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
